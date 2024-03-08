export class UserNotificationBulkUpdateDTO {
  notificationIds: number[];
  isRead: boolean;

  constructor(data?: UserNotificationBulkUpdateDTO) {
    Object.assign(this, data);
  }
}

export class UserNotificationBulkDeleteDTO {
  notificationIds: number[];

  constructor(data?: UserNotificationBulkDeleteDTO) {
    Object.assign(this, data);
  }
}
