import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { NotificationService } from '@core/services/api/notification.service';
import { UserNotificationService } from '@core/services/api/user-notification.service';
import { NotificationGetListDTO } from '@shared/models/dto/notification.dto';
import { NotificationGetListRO } from '@shared/models/ro/notification.ro';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-notification-dropdown',
  styleUrls: ['./notification-dropdown.component.scss'],
  templateUrl: './notification-dropdown.component.html',
})
export class NotificationDropdownComponent implements OnInit {
  notificationsPaginated: NotificationGetListRO;
  limit = 3;
  client: Socket;
  constructor(
    private router: Router,
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _userNotificationService: UserNotificationService,
  ) {}
  async socketInit() {}

  async ngOnInit() {
    const token = this._authService.getToken();
    this.client = io(`http://localhost:3000`, {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    });

    this.client.on('notification', () => {
      this.loadNotifications({ limit: this.limit, byUser: true, withRead: false });
    });
    this.loadNotifications({ limit: this.limit, byUser: true, withRead: false });
  }

  loadNotifications(dto: NotificationGetListDTO) {
    this._notificationService.getList(dto).subscribe(response => {
      this.notificationsPaginated = response;
    });
  }

  routeToNotifications() {
    // Read all

    // const dto = new UserNotificationBulkUpdateDTO();
    // dto.notificationIds = this.notificationsPaginated.data.map(notification => notification.id);
    // dto.isRead = true;

    this._userNotificationService.readAll().subscribe(() => {
      this.notificationsPaginated.data = [];
      this.notificationsPaginated.meta.totalItems = 0;
      const oldLocation = this.router.url;
      this.router.navigate(['/notification']);

      if (oldLocation === '/notification') {
        location.reload();
      }
    });
  }

  routeToNotification() {
    this.loadNotifications({ limit: this.limit, byUser: true, withRead: false });
  }
}
