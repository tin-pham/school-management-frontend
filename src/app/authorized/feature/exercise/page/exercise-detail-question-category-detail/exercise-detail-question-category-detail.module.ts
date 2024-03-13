import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionListModule } from '@features/question/container/question-list/question-list.module';
import { QuestionService } from '@core/services/api/question.service';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { ExerciseDetailQuestionCategoryDetailComponent } from './exercise-detail-question-category-detail.component';
import { ExerciseDetailQuestionCategoryDetailRoutingModule } from './exercise-detail-question-category-detail-routing.module';

@NgModule({
  declarations: [ExerciseDetailQuestionCategoryDetailComponent],
  imports: [ExerciseDetailQuestionCategoryDetailRoutingModule, SharedModule, QuestionListModule],
  providers: [QuestionService, ExerciseQuestionService],
})
export class ExerciseDetailQuestionCategoryDetailModule {}
