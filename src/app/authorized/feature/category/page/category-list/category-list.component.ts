import { ChangeDetectorRef, Component } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { AuthService } from '@core/services/api/auth.service';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CategoryGetListDataRO, CategoryGetListRO } from '@shared/models/ro/category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-category-list',
  styleUrls: ['category-list.component.scss'],
  templateUrl: 'category-list.component.html',
})
export class CategoryListComponent extends PaginateComponent {
  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  categories: CategoryGetListDataRO[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private _categoryService: CategoryService,
    private _authService: AuthService,
  ) {
    super();
  }

  loadData(dto: CategoryGetListDTO) {
    this._categoryService.getList(dto).subscribe({
      next: (response: CategoryGetListRO) => {
        this.categories = response.data;
        this.totalItems = response.meta.totalItems;
        this.cd.markForCheck();
      },
    });
  }

  getDto() {
    return {
      limit: this.itemsPerPage,
      page: this.page,
      search: this.search$.value,
      withCourseCount: true,
    };
  }

  delete(id: number) {
    this._categoryService.delete(id).subscribe({
      next: () => {
        this.toast.success('Xóa danh mục thành công');
        this.loadData(this.getDto());
        this.cd.markForCheck();
      },
    });
  }

  isYourCategory(category: CategoryGetListDataRO) {
    return category.createdBy === this._authService.getUserId();
  }
}
