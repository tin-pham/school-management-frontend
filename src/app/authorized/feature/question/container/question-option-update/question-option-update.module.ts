import { NgModule } from '@angular/core';
import { QuestionOptionModule } from '@features/question/component/question-option/question-option.module';
import { SharedModule } from '@shared/shared.module';
import { QuestionOptionUpdateComponent } from './question-option-update.component';

@NgModule({
  imports: [SharedModule, QuestionOptionModule],
  declarations: [QuestionOptionUpdateComponent],
  providers: [],
  exports: [QuestionOptionUpdateComponent],
})
export class QuestionOptionUpdateModule {}
