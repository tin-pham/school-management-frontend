import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLessonCreateComponent } from './course-lesson-create.component';

const routes: Routes = [
  {
    path: '',
    component: CourseLessonCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLessonCreateRoutingModule {}
