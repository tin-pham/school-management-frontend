import { NgModule } from '@angular/core';
import { AssignmentListModule } from '@features/assignment/container/assignment-list/assignment-list.module';
import { SharedModule } from '@shared/shared.module';
import { CourseAssignmentComponent } from './course-assignment.component';
import { CourseAssignmentRoutingModule } from './course-assignment-routing.module';

@NgModule({
  declarations: [CourseAssignmentComponent],
  imports: [CourseAssignmentRoutingModule, AssignmentListModule, SharedModule],
})
export class CourseAssignmentModule {}
