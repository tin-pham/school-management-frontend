import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionListDifficultyFilterModule } from '@features/question/component/question-list-difficulty-filter/question-list-difficulty-filter.module';
import { ExerciseQuestionSnapshotService } from '@core/services/api/exercise-question-snapshot.service';
import { TeacherQuestionListComponent } from './teacher-question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule, QuestionListDifficultyFilterModule],
  providers: [QuestionCategoryService, QuestionService, ExerciseQuestionSnapshotService],
  declarations: [TeacherQuestionListComponent],
  exports: [TeacherQuestionListComponent],
})
export class TeacherQuestionListModule {}
