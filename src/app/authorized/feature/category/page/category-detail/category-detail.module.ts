import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryGroupModule } from '../../container/category-group/category-group.module';
import { CategoryEditModule } from '../../container/category-edit/category-edit.module';
import { CategoryDetailComponent } from './category-detail.component';
import { CategoryDetailRoutingModule } from './category-detail-routing.module';

@NgModule({
  declarations: [CategoryDetailComponent],
  imports: [CategoryDetailRoutingModule, SharedModule, CategoryGroupModule, CategoryEditModule],
})
export class CategoryDetailModule {}
