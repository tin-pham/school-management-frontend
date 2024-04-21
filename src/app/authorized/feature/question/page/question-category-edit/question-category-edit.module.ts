import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryEditComponent } from './question-category-edit.component';
import { QuestionCategoryEditRoutingModule } from './question-category-edit-routing.module';

@NgModule({
  declarations: [QuestionCategoryEditComponent],
  imports: [QuestionCategoryEditRoutingModule, SharedModule],
  providers: [QuestionCategoryService],
})
export class QuestionCategoryEditModule {}
