import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionRadioComponent } from './question-option-radio.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionOptionRadioComponent],
  exports: [QuestionOptionRadioComponent],
})
export class QuestionOptionRadioModule {}
