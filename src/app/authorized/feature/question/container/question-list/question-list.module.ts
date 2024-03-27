import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionListDifficultyFilterModule } from '@features/question/component/question-list-difficulty-filter/question-list-difficulty-filter.module';
import { QuestionListComponent } from './question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule, QuestionListDifficultyFilterModule],
  declarations: [QuestionListComponent],
  providers: [QuestionCategoryService, QuestionService],
  exports: [QuestionListComponent],
})
export class QuestionListModule {}
