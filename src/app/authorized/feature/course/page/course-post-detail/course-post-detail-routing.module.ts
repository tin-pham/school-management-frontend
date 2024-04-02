import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePostDetailComponent } from './course-post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePostDetailRoutingModule {}
