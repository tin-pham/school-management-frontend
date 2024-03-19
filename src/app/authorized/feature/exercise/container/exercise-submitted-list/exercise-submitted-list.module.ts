import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { ExerciseSubmittedItemModule } from '@features/exercise/component/exercise-submitted-item/exercise-submitted-item.module';
import { ExerciseSubmittedListComponent } from './exercise-submitted-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule, ExerciseSubmittedItemModule],
  declarations: [ExerciseSubmittedListComponent],
  providers: [QuestionCategoryService, QuestionService],
  exports: [ExerciseSubmittedListComponent],
})
export class ExerciseSubmittedListModule {}
