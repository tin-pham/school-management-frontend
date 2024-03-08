import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationListModule } from '@features/notification/container/notification-list/notification-list.module';
import { NotificationHomeComponent } from './notification-home.component';
import { NotificationHomeRoutingModule } from './notification-home-routing.module';

@NgModule({
  declarations: [NotificationHomeComponent],
  imports: [NotificationHomeRoutingModule, SharedModule, NotificationListModule],
  providers: [],
})
export class NotificationHomeModule {}
