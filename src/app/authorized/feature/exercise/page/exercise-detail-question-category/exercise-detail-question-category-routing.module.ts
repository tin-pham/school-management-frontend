import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseDetailQuestionCategoryComponent } from './exercise-detail-question-category.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseDetailQuestionCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseDetailQuestionCategoryRoutingModule {}
