import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailHomeComponent } from './course-detail-home.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailHomeRoutingModule {}
