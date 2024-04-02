import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationItemsModule } from '../notification-items/notification-items.module';
import { NotificationListComponent } from './notification-list.component';

const COMPONENTS = [NotificationListComponent];

@NgModule({
  imports: [SharedModule, NotificationItemsModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class NotificationListModule {}
