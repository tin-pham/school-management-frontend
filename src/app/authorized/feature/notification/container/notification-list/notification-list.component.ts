import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { NotificationService } from '@core/services/api/notification.service';
import { UserNotificationService } from '@core/services/api/user-notification.service';
import { NotificationGetListDTO } from '@shared/models/dto/notification.dto';
import { NotificationGetListDataRO, NotificationGetListRO } from '@shared/models/ro/notification.ro';

@Component({
  selector: 'app-notification-list',
  styleUrls: ['notification-list.component.scss'],
  templateUrl: 'notification-list.component.html',
})
export class NotificationListComponent implements OnInit {
  notifications: NotificationGetListDataRO[] = [];

  notificationIdsChecked: number[] = [];

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private _notificationService: NotificationService,
    private _userNotificationService: UserNotificationService,
  ) {}

  ngOnInit() {
    this.loadNotifications({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadNotifications({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  loadNotifications(dto: NotificationGetListDTO) {
    this._notificationService
      .getList({
        ...dto,
        withRead: true,
        byUser: true,
      })
      .subscribe({
        next: (response: NotificationGetListRO) => {
          this.totalItems = response.meta.totalItems;
          this.notifications = response.data;
          this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
        },
      });
  }

  checkBoxChecked(isChecked: boolean, notificationId: number) {
    if (isChecked) {
      this.notificationIdsChecked.push(notificationId);
    } else {
      const index = this.notificationIdsChecked.indexOf(notificationId);
      if (index > -1) {
        this.notificationIdsChecked.splice(index, 1);
      }
    }
  }

  deleteSelectedNotifications() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa thông báo không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._userNotificationService.bulkDelete({ notificationIds: this.notificationIdsChecked }).subscribe(() => {
        this.loadNotifications({
          limit: this.itemsPerPage,
          page: this.page,
        });
        this.notificationIdsChecked = [];
      });
    });
  }
}
