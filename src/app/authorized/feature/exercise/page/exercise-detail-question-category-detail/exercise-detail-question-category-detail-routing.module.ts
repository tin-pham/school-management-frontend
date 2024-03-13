import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseDetailQuestionCategoryDetailComponent } from './exercise-detail-question-category-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseDetailQuestionCategoryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseDetailQuestionCategoryDetailRoutingModule {}
