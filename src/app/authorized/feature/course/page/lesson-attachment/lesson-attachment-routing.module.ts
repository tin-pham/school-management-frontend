import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonAttachmentComponent } from './lesson-attachment.component';

const routes: Routes = [
  {
    path: '',
    component: LessonAttachmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonAttachmentRoutingModule {}
