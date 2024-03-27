import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionWithoutCheckboxComponent } from './question-option-without-checkbox.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionOptionWithoutCheckboxComponent],
  exports: [QuestionOptionWithoutCheckboxComponent],
})
export class QuestionnOptionWithoutCheckboxModule {}
