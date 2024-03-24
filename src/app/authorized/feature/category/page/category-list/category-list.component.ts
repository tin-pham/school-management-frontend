import { ChangeDetectorRef, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CategoryGetListDataRO, CategoryGetListRO } from '@shared/models/ro/category.ro';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, finalize } from 'rxjs';

@Component({
  selector: 'app-category-list',
  styleUrls: ['category-list.component.scss'],
  templateUrl: 'category-list.component.html',
})
export class CategoryListComponent {
  displayedColumns: string[] = ['id', 'name', 'courseCount'];
  itemsPerPage = 5;
  page = 1;
  totalItems = 0;
  loading = true;
  categories: CategoryGetListDataRO[] = [];

  constructor(
    private categoryService: CategoryService,
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
    this.loadCategories({
      limit: this.itemsPerPage,
      page: this.page,
      withCourseCount: true,
      search: '',
    });
    this.categoryService.search$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(search => {
      this.page = 1;
      this.loadCategories({
        limit: this.itemsPerPage,
        page: this.page,
        withCourseCount: true,
        search: search,
      });
    });
  }

  loadCategories(dto: CategoryGetListDTO) {
    const { limit, page, withCourseCount, search } = dto;
    this.loading = true;
    this.categoryService
      .getList({ limit, page, withCourseCount, search })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response: CategoryGetListRO) => {
          this.categories = response.data;
          this.totalItems = response.meta.totalItems;
          this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
        },
        error: (error: Error) => this.toast.error(error.message),
      });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadCategories({
      limit: this.itemsPerPage,
      page: this.page,
      withCourseCount: true,
    });
  }
}
