import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionModule } from '../question-option/question-option.module';
import { QuestionOptionWithoutCheckboxModule } from '../question-option-without-checkbox/question-option-without-checkbox.module';
import { QuestionItemComponent } from './question-item.component';

@NgModule({
  imports: [SharedModule, QuestionOptionModule, QuestionOptionWithoutCheckboxModule],
  declarations: [QuestionItemComponent],
  exports: [QuestionItemComponent],
})
export class QuestionItemModule {}
