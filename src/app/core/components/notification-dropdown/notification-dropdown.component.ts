import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { NotificationService } from '@core/services/api/notification.service';
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
    private _authService: AuthService,
    private _notificationService: NotificationService,
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
}
