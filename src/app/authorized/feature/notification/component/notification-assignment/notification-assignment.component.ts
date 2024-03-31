import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NotificationGetListDataRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-assignment',
  styleUrls: ['notification-assignment.component.scss'],
  templateUrl: 'notification-assignment.component.html',
})
export class NotificationAssignmentComponent {
  @Input() notification: NotificationGetListDataRO;
  @Input() showCheckbox = true;

  @Output() onCheckBoxChange = new EventEmitter();
  checkBoxChange(event: MatCheckboxChange) {
    this.onCheckBoxChange.emit(event.checked);
  }

  dateAgo(notification: NotificationGetListDataRO) {
    const now = new Date();
    const createdAtDate = new Date(notification.createdAt);
    const seconds = Math.floor((now.getTime() - createdAtDate.getTime()) / 1000);

    if (seconds < 60) {
      return 'Bây giờ';
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} phút trước`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} giờ trước`;
    } else {
      return `${Math.floor(seconds / 86400)} ngày trước`;
    }
  }

  @Output() onRoute = new EventEmitter();
  route() {
    console.log('oke');
    this.onRoute.emit();
  }
}
