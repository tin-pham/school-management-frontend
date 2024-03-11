import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionOptionCreateModule } from '@features/question/container/question-option-create/question-option-create.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionOptionService } from '@core/services/api/question-option.service';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionDetailRoutingModule } from './question-detail-routing.module';

@NgModule({
  declarations: [QuestionDetailComponent],
  imports: [QuestionDetailRoutingModule, SharedModule, QuestionOptionCreateModule],
  providers: [DifficultyService, QuestionService, QuestionOptionService],
})
export class QuestionDetailModule {}
