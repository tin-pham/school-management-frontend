import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationItemComponent } from './notification-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NotificationItemComponent],
  exports: [NotificationItemComponent],
})
export class NotificationItemModule {}
