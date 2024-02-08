import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UncategorizeCourseDialogModule } from '../uncategorize-course-dialog/uncategorize-course-dialog.module';
import { CategoryEditComponent } from './category-edit.component';

@NgModule({
  imports: [SharedModule, UncategorizeCourseDialogModule],
  declarations: [CategoryEditComponent],
  exports: [CategoryEditComponent],
})
export class CategoryEditModule {}
