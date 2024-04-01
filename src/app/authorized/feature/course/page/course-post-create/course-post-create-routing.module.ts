import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePostCreateComponent } from './course-post-create.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePostCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePostCreateRoutingModule {}
