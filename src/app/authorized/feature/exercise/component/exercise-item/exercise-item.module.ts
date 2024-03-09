import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseItemComponent } from './exercise-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseItemComponent],
  providers: [],
  exports: [ExerciseItemComponent],
})
export class ExerciseItemModule {}
