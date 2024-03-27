import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationCommentComponent } from './notification-comment.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NotificationCommentComponent],
  exports: [NotificationCommentComponent],
})
export class NotificationCommentModule {}
