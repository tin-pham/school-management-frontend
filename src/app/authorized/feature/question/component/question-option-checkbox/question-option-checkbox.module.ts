import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionCheckboxComponent } from './question-option-checkbox.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionOptionCheckboxComponent],
  exports: [QuestionOptionCheckboxComponent],
})
export class QuestionOptionCheckboxModule {}
