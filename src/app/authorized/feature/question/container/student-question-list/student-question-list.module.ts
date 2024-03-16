import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { StudentQuestionItemModule } from '@features/question/component/student-question-item/student-question-item.module';
import { ExerciseQuestionSnapshotService } from '@core/services/api/exercise-question-snapshot.service';
import { StudentQuestionListComponent } from './student-question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule, StudentQuestionItemModule],
  declarations: [StudentQuestionListComponent],
  providers: [ExerciseQuestionSnapshotService],
  exports: [StudentQuestionListComponent],
})
export class StudentQuestionListModule {}
