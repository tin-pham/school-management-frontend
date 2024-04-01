import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePostComponent } from './course-post.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePostRoutingModule {}
