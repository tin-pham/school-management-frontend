import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryListModule } from '@features/question/container/question-category-list/question-category-list.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionOptionCreateModule } from '@features/question/container/question-option-create/question-option-create.module';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionCreateComponent } from './question-create.component';
import { QuestionCreateRoutingModule } from './question-create-routing.module';

@NgModule({
  declarations: [QuestionCreateComponent],
  imports: [QuestionCreateRoutingModule, SharedModule, QuestionCategoryListModule, QuestionOptionCreateModule],
  providers: [QuestionService, DifficultyService],
})
export class QuestionCreateModule {}
