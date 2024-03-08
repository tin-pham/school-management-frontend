import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationItemModule } from '@features/notification/component/notification-item/notification-item.module';
import { NotificationListComponent } from './notification-list.component';

const COMPONENTS = [NotificationListComponent];

@NgModule({
  imports: [SharedModule, NotificationItemModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class NotificationListModule {}
