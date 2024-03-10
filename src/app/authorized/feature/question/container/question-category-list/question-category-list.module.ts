import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryItemModule } from '@features/question/component/question-category-item/question-category-item.module';
import { QuestionCategoryListComponent } from './question-category-list.component';

@NgModule({
  imports: [SharedModule, QuestionCategoryItemModule],
  declarations: [QuestionCategoryListComponent],
  providers: [QuestionCategoryService],
  exports: [QuestionCategoryListComponent],
})
export class QuestionCategoryListModule {}
