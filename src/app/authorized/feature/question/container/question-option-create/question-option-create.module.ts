import { NgModule } from '@angular/core';
import { QuestionOptionModule } from '@features/question/component/question-option/question-option.module';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionCreateComponent } from './question-option-create.component';

@NgModule({
  imports: [SharedModule, QuestionOptionModule],
  declarations: [QuestionOptionCreateComponent],
  providers: [],
  exports: [QuestionOptionCreateComponent],
})
export class QuestionOptionCreateModule {}
