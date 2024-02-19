import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonAssignmentComponent } from './lesson-assignment.component';

const routes: Routes = [
  {
    path: '',
    component: LessonAssignmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonAssignmentRoutingModule {}
