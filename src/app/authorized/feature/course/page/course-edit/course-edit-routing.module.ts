import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditComponent } from './course-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CourseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseEditRoutingModule {}
