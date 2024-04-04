import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonDeletedComponent } from './lesson-deleted.component';

const routes: Routes = [
  {
    path: '',
    component: LessonDeletedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonDeletedRoutingModule {}
