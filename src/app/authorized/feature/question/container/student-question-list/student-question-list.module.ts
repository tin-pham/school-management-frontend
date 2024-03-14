import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { QuestionItemModule } from '@features/question/component/question-item/question-item.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { StudentQuestionItemModule } from '@features/question/component/student-question-item/student-question-item.module';
import { StudentQuestionListComponent } from './student-question-list.component';

@NgModule({
  imports: [SharedModule, QuestionItemModule, StudentQuestionItemModule],
  declarations: [StudentQuestionListComponent],
  providers: [QuestionCategoryService, QuestionService],
  exports: [StudentQuestionListComponent],
})
export class StudentQuestionListModule {}
