import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionModule } from '../question-option/question-option.module';
import { StudentQuestionItemComponent } from './student-question-item.component';

@NgModule({
  imports: [SharedModule, QuestionOptionModule],
  declarations: [StudentQuestionItemComponent],
  exports: [StudentQuestionItemComponent],
})
export class StudentQuestionItemModule {}
