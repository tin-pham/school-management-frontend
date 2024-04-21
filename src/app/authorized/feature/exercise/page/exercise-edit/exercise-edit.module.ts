import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseEditComponent } from './exercise-edit.component';
import { ExerciseEditRoutingModule } from './exercise-edit-routing.module';

@NgModule({
  declarations: [ExerciseEditComponent],
  imports: [ExerciseEditRoutingModule, SharedModule],
  providers: [ExerciseService, DifficultyService],
})
export class ExerciseEditModule {}
