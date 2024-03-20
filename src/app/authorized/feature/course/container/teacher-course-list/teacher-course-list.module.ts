import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseService } from '@core/services/api/course.service';
import { CourseCardModule } from '@features/course/component/course-card/course-card.module';
import { TeacherCourseListComponent } from './teacher-course-list.component';

@NgModule({
  imports: [SharedModule, CourseCardModule],
  providers: [CourseService],
  declarations: [TeacherCourseListComponent],
  exports: [TeacherCourseListComponent],
})
export class TeacherCourseListModule {}
