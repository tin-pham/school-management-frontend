import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryCreateFormComponent } from './category-create-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CategoryCreateFormComponent],
  providers: [CategoryService],
  exports: [CategoryCreateFormComponent],
})
export class CategoryCreateFormModule {}
