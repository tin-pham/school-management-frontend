import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ExerciseDetailComponent } from './exercise-detail.component';
import { ExerciseDetailRoutingModule } from './exercise-detail-routing.module';

@NgModule({
  declarations: [ExerciseDetailComponent],
  imports: [ExerciseDetailRoutingModule, SharedModule],
  providers: [ExerciseService],
})
export class ExerciseDetailModule {}
