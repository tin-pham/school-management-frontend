import { NgModule } from '@angular/core';
import { CategoryCreateFormModule } from '../../container/category-create-form/category-create-form.module';
import { CategoryCreateComponent } from './category-create.component';
import { CategoryCreateRoutingModule } from './category-create-routing.module';

@NgModule({
  declarations: [CategoryCreateComponent],
  imports: [CategoryCreateRoutingModule, CategoryCreateFormModule],
})
export class CategoryCreateModule {}
