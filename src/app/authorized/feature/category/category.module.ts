import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryTableModule } from './container/category-table/category-table.module';

const CONTAINERS = [CategoryTableModule];

@NgModule({
  declarations: [CategoryComponent],
  imports: [CategoryRoutingModule, ...CONTAINERS],
})
export class CategoryModule {}
