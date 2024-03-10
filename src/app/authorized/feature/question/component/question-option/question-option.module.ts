import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionComponent } from './question-option.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionOptionComponent],
  exports: [QuestionOptionComponent],
})
export class QuestionOptionModule {}
