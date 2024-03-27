import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationExerciseComponent } from './notification-exercise.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NotificationExerciseComponent],
  exports: [NotificationExerciseComponent],
})
export class NotificationExerciseModule {}
