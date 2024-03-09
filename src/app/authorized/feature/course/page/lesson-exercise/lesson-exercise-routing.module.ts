import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonExerciseComponent } from './lesson-exercise.component';

const routes: Routes = [
  {
    path: '',
    component: LessonExerciseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonExerciseRoutingModule {}
