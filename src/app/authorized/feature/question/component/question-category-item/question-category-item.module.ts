import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryItemComponent } from './question-category-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [QuestionCategoryItemComponent],
  exports: [QuestionCategoryItemComponent],
})
export class QuestionCategoryItemModule {}
