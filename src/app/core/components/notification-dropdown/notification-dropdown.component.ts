import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/api/notification.service';
import { UserNotificationService } from '@core/services/api/user-notification.service';
import { NotificationGetListDTO } from '@shared/models/dto/notification.dto';
import { UserNotificationBulkUpdateDTO } from '@shared/models/dto/user-notification.dto';
import { NotificationGetListDataRO, NotificationGetListRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-dropdown',
  styleUrls: ['./notification-dropdown.component.scss'],
  templateUrl: './notification-dropdown.component.html',
})
export class NotificationDropdownComponent implements OnInit {
  notificationsPaginated: NotificationGetListRO;
  limit = 3;

  constructor(
    private router: Router,
    private _notificationService: NotificationService,
    private _userNotificationService: UserNotificationService,
  ) {}

  ngOnInit() {
    this.loadNotifications({ limit: this.limit, byUser: true, withRead: false });
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

  loadNotifications(dto: NotificationGetListDTO) {
    this._notificationService.getList(dto).subscribe(response => {
      this.notificationsPaginated = response;
    });
  }

  routeToNotification(notification: NotificationGetListDataRO) {
    const dto = new UserNotificationBulkUpdateDTO();
    dto.notificationIds = [notification.id];
    dto.isRead = true;
    this._userNotificationService.bulkUpdate(dto).subscribe(() => {
      this.loadNotifications({ limit: this.limit, byUser: true, withRead: false });
    });

    if (notification.commentId) {
      this.router.navigate(['comment', notification.commentParentId], { queryParams: { highlightedCommentId: notification.commentId } });
    } else if (notification.assignmentId) {
      this.router.navigate(['assignment', notification.assignmentId]);
    } else if (notification.lessonId) {
      this.router.navigate(['/course', notification.courseId, 'section', notification.sectionId, 'lesson', notification.lessonId]);
    } else if (notification.exerciseId) {
      this.router.navigate(['/exercise', notification.exerciseId]);
    }
  }
}
