import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseLessonItemModule } from '@features/course/component/course-lesson-item/course-lesson-item.module';
import { CourseSectionComponent } from './course-section.component';

@NgModule({
  imports: [SharedModule, CourseLessonItemModule],
  declarations: [CourseSectionComponent],
  providers: [CourseStudentService],
  exports: [CourseSectionComponent],
})
export class CourseSectionModule {}
