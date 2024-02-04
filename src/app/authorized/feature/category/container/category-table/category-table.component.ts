import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, finalize } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { CategoryGetListDataRO, CategoryGetListRO } from '@shared/models/ro/category.ro';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'courseCount'];
  dataSource = new MatTableDataSource<CategoryGetListDataRO>([]);
  itemsPerPage = 5;
  page = 1;
  totalItems = 0;
  loading = true;

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
          this.dataSource.data = response.data;
          this.totalItems = response.meta.totalItems;
          this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
        },
        error: (error: Error) => this.toast.error(error.message),
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadCategories({
      limit: this.itemsPerPage,
      page: this.page,
      withCourseCount: true,
      search: this.dataSource.filter,
    });
  }
}
