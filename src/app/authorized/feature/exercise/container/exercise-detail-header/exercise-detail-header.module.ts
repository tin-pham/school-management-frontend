import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseDetailHeaderComponent } from './exercise-detail-header.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseDetailHeaderComponent],
  providers: [],
  exports: [ExerciseDetailHeaderComponent],
})
export class ExerciseDetailHeaderModule {}
