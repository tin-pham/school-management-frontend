import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAssignmentComponent } from './course-assignment.component';

const routes: Routes = [
  {
    path: '',
    component: CourseAssignmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAssignmentRoutingModule {}
