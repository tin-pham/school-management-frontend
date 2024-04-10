import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UncategorizeCourseDialogModule } from '@features/category/container/uncategorize-course-dialog/uncategorize-course-dialog.module';
import { CategoryEditComponent } from './category-edit.component';
import { CategoryEditRoutingModule } from './category-edit-routing.module';

@NgModule({
  imports: [SharedModule, UncategorizeCourseDialogModule, CategoryEditRoutingModule],
  declarations: [CategoryEditComponent],
  exports: [CategoryEditComponent],
})
export class CategoryEditModule {}
