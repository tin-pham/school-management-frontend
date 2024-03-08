import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { UserNotificationBulkUpdateDTO } from '@shared/models/dto/user-notification.dto';
import { NotificationGetListDataRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-item',
  styleUrls: ['notification-item.component.scss'],
  templateUrl: 'notification-item.component.html',
})
export class NotificationItemComponent {
  @Input() notification: NotificationGetListDataRO;
  isChecked = false;

  constructor(private router: Router) {}

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

  @Output() onCheckBoxChange = new EventEmitter<boolean>();
  checkBoxChange(event: MatCheckboxChange) {
    this.onCheckBoxChange.emit(event.checked);
  }

  routeToNotification(notification: NotificationGetListDataRO) {
    const dto = new UserNotificationBulkUpdateDTO();
    dto.notificationIds = [notification.id];
    dto.isRead = true;

    if (notification.commentId) {
      this.router.navigate(['comment', notification.commentParentId], { queryParams: { highlightedCommentId: notification.commentId } });
    } else if (notification.assignmentId) {
      this.router.navigate(['assignment', notification.assignmentId]);
    }
  }
}
