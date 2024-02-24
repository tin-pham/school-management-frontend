import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';

@Component({
  selector: 'app-course-detail-sidebar',
  styleUrls: ['course-detail-sidebar.component.scss'],
  templateUrl: 'course-detail-sidebar.component.html',
})
export class CourseDetailSidebarComponent {
  @Input() name: string;
  @Input() imageUrl: string;
  @Input() courseId: number;
  @Input() isRegisted: boolean;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  @Output() onRegisterClick = new EventEmitter();

  registerClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận đăng ký');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onRegisterClick.emit();
    });
  }

  @Output() onUnRegisterClick = new EventEmitter();
  unRegisterClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xóa đăng ký');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onUnRegisterClick.emit();
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
