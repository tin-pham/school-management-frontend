import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionListModule } from '@features/question/container/question-list/question-list.module';
import { ExerciseDetailComponent } from './exercise-detail.component';
import { ExerciseDetailRoutingModule } from './exercise-detail-routing.module';

@NgModule({
  declarations: [ExerciseDetailComponent],
  imports: [ExerciseDetailRoutingModule, SharedModule, QuestionListModule],
  providers: [ExerciseService],
})
export class ExerciseDetailModule {}
