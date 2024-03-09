import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseItemModule } from '@features/exercise/component/exercise-item/exercise-item.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { LessonExerciseComponent } from './lesson-exercise.component';
import { LessonExerciseRoutingModule } from './lesson-exercise-routing.module';

@NgModule({
  declarations: [LessonExerciseComponent],
  imports: [LessonExerciseRoutingModule, SharedModule, ExerciseItemModule],
  providers: [ExerciseService],
})
export class LessonExerciseModule {}
