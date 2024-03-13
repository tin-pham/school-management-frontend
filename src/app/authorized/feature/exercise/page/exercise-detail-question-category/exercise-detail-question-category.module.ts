import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryListModule } from '@features/question/container/question-category-list/question-category-list.module';
import { ExerciseDetailQuestionCategoryComponent } from './exercise-detail-question-category.component';
import { ExerciseDetailQuestionCategoryRoutingModule } from './exercise-detail-question-category-routing.module';

@NgModule({
  declarations: [ExerciseDetailQuestionCategoryComponent],
  imports: [ExerciseDetailQuestionCategoryRoutingModule, SharedModule, QuestionCategoryListModule],
  providers: [],
})
export class ExerciseDetailQuestionCategoryModule {}
