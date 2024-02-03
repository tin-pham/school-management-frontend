import { NgModule } from '@angular/core';
import { CategoryTableModule } from '../../container/category-table/category-table.module';
import { CategoryListComponent } from './category-list.component';
import { CategoryListRoutingModule } from './category-list-routing.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CategoryListRoutingModule, CategoryTableModule],
})
export class CategoryListModule {}
