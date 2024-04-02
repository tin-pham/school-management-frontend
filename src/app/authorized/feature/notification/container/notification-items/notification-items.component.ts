import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotificationService } from '@core/services/api/user-notification.service';
import { UserNotificationBulkUpdateDTO } from '@shared/models/dto/user-notification.dto';
import { NotificationGetListDataRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-items',
  styleUrls: ['notification-items.component.scss'],
  templateUrl: 'notification-items.component.html',
})
export class NotificationItemsComponent {
  @Input() notifications: NotificationGetListDataRO[] = [];

  exerciseImageUrl =
    'https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  constructor(
    private _userNotificationService: UserNotificationService,
    private router: Router,
  ) {}

  routeToNotification(notification: NotificationGetListDataRO) {
    const dto = new UserNotificationBulkUpdateDTO();
    dto.notificationIds = [notification.id];
    dto.isRead = true;
    this._userNotificationService.bulkUpdate(dto).subscribe(() => {
      this.notifications = this.notifications.map(notification => {
        if (notification.id === dto.notificationIds[0]) {
          notification.isRead = true;
        }
        return notification;
      });
    });

    if (notification.commentId) {
      this.router.navigate(['comment', notification.commentParentId], { queryParams: { highlightedCommentId: notification.commentId } });
    } else if (notification.assignmentId) {
      this.router.navigate(['assignment', notification.assignmentId]);
    } else if (notification.lessonId) {
      this.router.navigate(['/course', notification.courseId, 'section', notification.sectionId, 'lesson', notification.lessonId]);
    } else if (notification.exerciseId) {
      this.router.navigate(['/exercise', notification.exerciseId]);
    } else if (notification.postId) {
      this.router.navigate(['/course', notification.courseId, 'post', notification.postId]);
    }
  }
}
