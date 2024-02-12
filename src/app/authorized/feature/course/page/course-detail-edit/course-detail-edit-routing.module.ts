import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailEditComponent } from './course-detail-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailEditRoutingModule {}
