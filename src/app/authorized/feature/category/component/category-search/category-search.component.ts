import { Component } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';

@Component({
  selector: 'app-category-search',
  styleUrls: ['category-search.component.scss'],
  templateUrl: 'category-search.component.html',
})
export class CategorySearchComponent {
  search = '';

  constructor(private readonly categoryService: CategoryService) {}

  onChange(search: string) {
    this.categoryService.setSearch(search);
  }
}
