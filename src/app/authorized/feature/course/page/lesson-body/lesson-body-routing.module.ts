import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonBodyComponent } from './lesson-body.component';

const routes: Routes = [
  {
    path: '',
    component: LessonBodyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonBodyRoutingModule {}
