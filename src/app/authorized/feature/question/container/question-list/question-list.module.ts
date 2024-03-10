import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionListComponent } from './question-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionListComponent],
  providers: [],
  exports: [QuestionListComponent],
})
export class QuestionListModule {}
