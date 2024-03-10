import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryDetailComponent } from './question-category-detail.component';
import { QuestionCategoryDetailRoutingModule } from './question-category-detail-routing.module';

@NgModule({
  declarations: [QuestionCategoryDetailComponent],
  imports: [QuestionCategoryDetailRoutingModule, SharedModule],
  providers: [QuestionCategoryService],
})
export class QuestionCategoryDetailModule {}
