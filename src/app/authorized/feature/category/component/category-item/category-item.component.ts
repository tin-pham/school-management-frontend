import { Component, Input } from '@angular/core';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';

@Component({
  selector: 'app-category-item',
  styleUrls: ['category-item.component.scss'],
  templateUrl: 'category-item.component.html',
})
export class CategoryItemComponent {
  @Input() category: CategoryGetListDataRO;
}
