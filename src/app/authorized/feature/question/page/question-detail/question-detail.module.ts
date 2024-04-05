import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionOptionCreateModule } from '@features/question/container/question-option-create/question-option-create.module';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionOptionUpdateModule } from '@features/question/container/question-option-update/question-option-update.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { StudentExerciseGradeService } from '@core/services/api/student-exercise-grade.service';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionDetailRoutingModule } from './question-detail-routing.module';

@NgModule({
  declarations: [QuestionDetailComponent],
  imports: [QuestionDetailRoutingModule, SharedModule, QuestionOptionCreateModule, QuestionOptionUpdateModule],
  providers: [DifficultyService, QuestionService, ExerciseService, StudentExerciseGradeService],
})
export class QuestionDetailModule {}
