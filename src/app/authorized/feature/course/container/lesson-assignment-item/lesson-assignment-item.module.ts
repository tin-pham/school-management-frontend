import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonAssignmentItemComponent } from './lesson-assignment-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LessonAssignmentItemComponent],
  providers: [],
  exports: [LessonAssignmentItemComponent],
})
export class LessonAssignmentItemModule {}
