import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionListModule } from '@features/question/container/question-list/question-list.module';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { StudentQuestionListModule } from '@features/question/container/student-question-list/student-question-list.module';
import { ExerciseDetailHeaderModule } from '@features/exercise/container/exercise-detail-header/exercise-detail-header.module';
import { StudentExerciseService } from '@core/services/api/student-exercise.service';
import { StudentExerciseGradeService } from '@core/services/api/student-exercise-grade.service';
import { ExerciseDetailDoneModule } from '@features/exercise/container/exercise-detail-done/exercise-detail-done.module';
import { ExerciseSubmittedListModule } from '@features/exercise/container/exercise-submitted-list/exercise-submitted-list.module';
import { TeacherQuestionListModule } from '@features/question/container/teacher-question-list/taecher-question-list.module';
import { ExerciseDetailComponent } from './exercise-detail.component';
import { ExerciseDetailRoutingModule } from './exercise-detail-routing.module';

@NgModule({
  declarations: [ExerciseDetailComponent],
  imports: [
    ExerciseDetailRoutingModule,
    SharedModule,
    QuestionListModule,
    StudentQuestionListModule,
    ExerciseDetailHeaderModule,
    ExerciseDetailDoneModule,
    ExerciseSubmittedListModule,
    TeacherQuestionListModule,
  ],
  providers: [ExerciseService, ExerciseQuestionService, StudentExerciseService, StudentExerciseGradeService],
})
export class ExerciseDetailModule {}
