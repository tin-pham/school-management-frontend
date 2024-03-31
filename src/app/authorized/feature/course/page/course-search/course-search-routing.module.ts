import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSearchComponent } from './course-search.component';

const routes: Routes = [
  {
    path: '',
    component: CourseSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSearchRoutingModule {}
