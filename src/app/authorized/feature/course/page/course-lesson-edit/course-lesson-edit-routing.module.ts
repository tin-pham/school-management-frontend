import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLessonEditComponent } from './course-lesson-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CourseLessonEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLessonEditRoutingModule {}
