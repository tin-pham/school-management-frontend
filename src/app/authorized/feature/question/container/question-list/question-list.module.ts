import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionListComponent } from './question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule],
  declarations: [QuestionListComponent],
  providers: [],
  exports: [QuestionListComponent],
})
export class QuestionListModule {}
