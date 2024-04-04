import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDeletedComponent } from './course-deleted.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDeletedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDeletedRoutingModule {}
