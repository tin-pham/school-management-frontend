import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseSectionComponent } from './course-section.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseSectionComponent],
  providers: [CourseStudentService],
  exports: [CourseSectionComponent],
})
export class CourseSectionModule {}
