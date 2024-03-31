import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NotificationGetListDataRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-exercise',
  styleUrls: ['notification-exercise.component.scss'],
  templateUrl: 'notification-exercise.component.html',
})
export class NotificationExerciseComponent {
  @Input() notification: NotificationGetListDataRO;
  @Input() showCheckbox: boolean;

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
    this.onRoute.emit();
  }
}
