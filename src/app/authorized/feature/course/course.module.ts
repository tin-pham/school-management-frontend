import { NgModule } from '@angular/core';
import { CourseService } from '@core/services/api/course.service';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [CourseComponent],
  providers: [CourseService],
  imports: [CourseRoutingModule],
})
export class CourseModule {}
