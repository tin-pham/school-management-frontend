import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentSubmitGetGradeRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-submit-grade',
  styleUrls: ['./assignment-submit-grade.component.scss'],
  templateUrl: './assignment-submit-grade.component.html',
})
export class AssignmentSubmitGradeComponent {
  @Input() grade: AssignmentSubmitGetGradeRO;
  @Input() isYourCourse: boolean;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  warnButtonShow() {
    return this._authService.isTeacher() || this._authService.isAdmin();
  }

  @Output() onDeleteClick = new EventEmitter<void>();
  deleteClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận chấm lại không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDeleteClick.emit();
    });
  }
}
