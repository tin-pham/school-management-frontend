import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { ExerciseQuestionListComponent } from './exercise-question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule],
  declarations: [ExerciseQuestionListComponent],
  providers: [QuestionCategoryService, QuestionService],
  exports: [ExerciseQuestionListComponent],
})
export class ExerciseQuestionListModule {}
