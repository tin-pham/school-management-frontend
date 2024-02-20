import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonCommentComponent } from './lesson-comment.component';

const routes: Routes = [
  {
    path: '',
    component: LessonCommentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonCommentRoutingModule {}
