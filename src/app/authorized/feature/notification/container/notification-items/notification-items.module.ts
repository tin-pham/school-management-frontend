import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationItemModule } from '@features/notification/component/notification-item/notification-item.module';
import { UserNotificationService } from '@core/services/api/user-notification.service';
import { NotificationItemsComponent } from './notification-items.component';

@NgModule({
  imports: [SharedModule, NotificationItemModule],
  declarations: [NotificationItemsComponent],
  providers: [UserNotificationService],
  exports: [NotificationItemsComponent],
})
export class NotificationItemsModule {}
