import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDataRO, CategoryGetListRO } from '@shared/models/ro/category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-category-table',
  styleUrls: ['category-table.component.scss'],
  templateUrl: 'category-table.component.html',
})
export class CategoryTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'displayName', 'username', 'email', 'phone'];
  dataSource: MatTableDataSource<CategoryGetListDataRO>;
  itemsPerPage = 5;
  page = 1;
  loading = true;
  totalItems: number;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly cd: ChangeDetectorRef,
    private readonly toast: ToastrService,
  ) {}

  ngOnInit() {
    this.categoryService
      .getList({ limit: this.itemsPerPage, page: this.page })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response: CategoryGetListRO) => {
          this.dataSource = new MatTableDataSource(response.data);
          this.totalItems = response.meta.totalItems;
          this.cd.detectChanges();
        },
        error: (error: Error) => this.toast.error(error.message),
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNextData(currentSize: number, pageIndex: number, pageSize: number) {
    this.categoryService
      .getList({
        page: pageIndex + 1,
        limit: pageSize,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: response => {
          const { data } = response;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource._updateChangeSubscription();
          this.itemsPerPage = pageSize;
          this.page = pageIndex + 1;
          this.cd.detectChanges();
        },
        error: error => this.toast.error(error.message),
      });
  }

  handlePageChange(event: PageEvent) {
    this.loading = true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const previousSize = pageSize * pageIndex;
    this.getNextData(previousSize, pageIndex, pageSize);
  }
}
