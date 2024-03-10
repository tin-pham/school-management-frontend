import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryListModule } from '@features/question/container/question-category-list/question-category-list.module';
import { QuestionHomeRoutingModule } from './question-home-routing.module';
import { QuestionHomeComponent } from './question-home.component';

@NgModule({
  declarations: [QuestionHomeComponent],
  imports: [QuestionHomeRoutingModule, SharedModule, QuestionCategoryListModule],
})
export class QuestionHomeModule {}
