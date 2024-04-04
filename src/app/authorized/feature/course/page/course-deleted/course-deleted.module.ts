import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDeletedRoutingModule } from './course-deleted-routing.module';
import { CourseDeletedComponent } from './course-deleted.component';

@NgModule({
  imports: [SharedModule, CourseDeletedRoutingModule],
  providers: [],
  declarations: [CourseDeletedComponent],
})
export class CourseDeletedModule {}
