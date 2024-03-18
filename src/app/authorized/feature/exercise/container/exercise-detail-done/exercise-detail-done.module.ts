import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseDetailDoneComponent } from './exercise-detail-done.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseDetailDoneComponent],
  providers: [],
  exports: [ExerciseDetailDoneComponent],
})
export class ExerciseDetailDoneModule {}
