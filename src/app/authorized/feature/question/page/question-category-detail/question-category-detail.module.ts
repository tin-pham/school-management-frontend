import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionListModule } from '@features/question/container/question-list/question-list.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryDetailComponent } from './question-category-detail.component';
import { QuestionCategoryDetailRoutingModule } from './question-category-detail-routing.module';

@NgModule({
  declarations: [QuestionCategoryDetailComponent],
  imports: [QuestionCategoryDetailRoutingModule, SharedModule, QuestionListModule],
  providers: [QuestionService, QuestionCategoryService],
})
export class QuestionCategoryDetailModule {}
