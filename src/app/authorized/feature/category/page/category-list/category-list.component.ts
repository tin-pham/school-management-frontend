import { ChangeDetectorRef, Component } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CategoryGetListDataRO, CategoryGetListRO } from '@shared/models/ro/category.ro';

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
    private categoryService: CategoryService,
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  loadData(dto: CategoryGetListDTO) {
    this.categoryService.getList(dto).subscribe({
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
}
