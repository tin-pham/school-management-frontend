import { NgModule } from '@angular/core';
import { CourseFormModule } from '../../container/course-form/course-form.module';
import { CourseCreateComponent } from './course-create.component';
import { CourseCreateRoutingModule } from './course-create-routing.module';

@NgModule({
  declarations: [CourseCreateComponent],
  imports: [CourseCreateRoutingModule, CourseFormModule],
})
export class CourseCreateModule {}
