import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionDetailRoutingModule } from './question-detail-routing.module';

@NgModule({
  declarations: [QuestionDetailComponent],
  imports: [QuestionDetailRoutingModule, SharedModule],
})
export class QuestionDetailModule {}
