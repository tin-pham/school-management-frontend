import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryCreateComponent } from './question-category-create.component';
import { QuestionCategoryCreateRoutingModule } from './question-category-create-routing.module';

@NgModule({
  declarations: [QuestionCategoryCreateComponent],
  imports: [QuestionCategoryCreateRoutingModule, SharedModule],
  providers: [QuestionCategoryService],
})
export class QuestionCategoryCreateModule {}
