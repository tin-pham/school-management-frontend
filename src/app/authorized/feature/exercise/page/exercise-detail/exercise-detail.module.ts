import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionListModule } from '@features/question/container/question-list/question-list.module';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { StudentQuestionListModule } from '@features/question/container/student-question-list/student-question-list.module';
import { ExerciseDetailComponent } from './exercise-detail.component';
import { ExerciseDetailRoutingModule } from './exercise-detail-routing.module';

@NgModule({
  declarations: [ExerciseDetailComponent],
  imports: [ExerciseDetailRoutingModule, SharedModule, QuestionListModule, StudentQuestionListModule],
  providers: [ExerciseService, ExerciseQuestionService],
})
export class ExerciseDetailModule {}
