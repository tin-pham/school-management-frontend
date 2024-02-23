import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentGetListDataRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-lesson-assignment-item',
  styleUrls: ['lesson-assignment-item.component.scss'],
  templateUrl: 'lesson-assignment-item.component.html',
})
export class LessonAssignmentItemComponent {
  @Input() assignment: AssignmentGetListDataRO;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  @Output() onDelete = new EventEmitter<void>();

  delete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDelete.emit();
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
