import { NgModule } from '@angular/core';
import { CategoryItemModule } from '@features/category/component/category-item/category-item.module';
import { CategoryService } from '@core/services/api/category.service';
import { SharedModule } from '@shared/shared.module';
import { CategoryTableModule } from '../../container/category-table/category-table.module';
import { CategoryToolbarModule } from '../../container/category-toolbar/category-toolbar.module';
import { CategoryListComponent } from './category-list.component';
import { CategoryListRoutingModule } from './category-list-routing.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CategoryListRoutingModule, CategoryTableModule, CategoryToolbarModule, CategoryItemModule, SharedModule],
  providers: [CategoryService],
})
export class CategoryListModule {}
