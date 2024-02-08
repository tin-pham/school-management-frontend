import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { UncategorizeCourseDialogComponent } from './uncategorize-course-dialog.component';

const COMPONENTS = [UncategorizeCourseDialogComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [CategoryService],
  exports: [...COMPONENTS],
})
export class UncategorizeCourseDialogModule {}
