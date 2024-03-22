import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseOutcomeListComponent } from './course-outcome-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseOutcomeListComponent],
  exports: [CourseOutcomeListComponent],
})
export class CourseOutcomeListModule {}
