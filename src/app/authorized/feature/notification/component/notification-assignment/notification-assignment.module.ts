import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationAssignmentComponent } from './notification-assignment.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NotificationAssignmentComponent],
  exports: [NotificationAssignmentComponent],
})
export class NotificationAssignmentModule {}
