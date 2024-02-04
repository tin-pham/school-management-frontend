import { NgModule } from '@angular/core';
import { CategoryTableModule } from '../../container/category-table/category-table.module';
import { CategoryToolbarModule } from '../../container/category-toolbar/category-toolbar.module';
import { CategoryListComponent } from './category-list.component';
import { CategoryListRoutingModule } from './category-list-routing.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CategoryListRoutingModule, CategoryTableModule, CategoryToolbarModule],
})
export class CategoryListModule {}
