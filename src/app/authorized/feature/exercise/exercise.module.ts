import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseComponent } from './exercise.component';
import { ExerciseRoutingModule } from './exercise-routing.module';

@NgModule({
  declarations: [ExerciseComponent],
  imports: [ExerciseRoutingModule, SharedModule],
  providers: [],
})
export class ExerciseModule {}
