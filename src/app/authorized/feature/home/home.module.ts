import { NgModule } from '@angular/core';
import { CourseService } from '@core/services/api/course.service';
import { SharedModule } from '@shared/shared.module';
import { CourseCardsModule } from '@features/course/component/course-cards/course-cards.module';
import { TeacherCourseListModule } from '@features/course/container/teacher-course-list/teacher-course-list.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule, CourseCardsModule, TeacherCourseListModule],
  providers: [CourseService],
})
export class HomeModule {}
