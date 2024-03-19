import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseSubmittedItemComponent } from './exercise-submitted-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseSubmittedItemComponent],
  providers: [],
  exports: [ExerciseSubmittedItemComponent],
})
export class ExerciseSubmittedItemModule {}
