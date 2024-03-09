import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ExerciseCreateComponent } from './exercise-create.component';
import { ExerciseCreateRoutingModule } from './exercise-create-routing.module';

@NgModule({
  declarations: [ExerciseCreateComponent],
  imports: [ExerciseCreateRoutingModule, SharedModule],
  providers: [DifficultyService, ExerciseService],
})
export class ExerciseCreateModule {}
