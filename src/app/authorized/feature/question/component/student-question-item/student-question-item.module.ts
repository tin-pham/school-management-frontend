import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionModule } from '../question-option/question-option.module';
import { QuestionOptionRadioModule } from '../question-option-radio/question-option-radio.module';
import { QuestionOptionCheckboxModule } from '../question-option-checkbox/question-option-checkbox.module';
import { QuestionOptionWithoutCheckboxModule } from '../question-option-without-checkbox/question-option-without-checkbox.module';
import { StudentQuestionItemComponent } from './student-question-item.component';

@NgModule({
  imports: [
    SharedModule,
    QuestionOptionModule,
    QuestionOptionRadioModule,
    QuestionOptionCheckboxModule,
    QuestionOptionWithoutCheckboxModule,
  ],
  declarations: [StudentQuestionItemComponent],
  exports: [StudentQuestionItemComponent],
})
export class StudentQuestionItemModule {}
