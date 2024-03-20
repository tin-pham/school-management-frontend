import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { TeacherGetListDataRO } from '@shared/models/ro/teacher.ro';

@Component({
  selector: 'app-teacher-item',
  styleUrls: ['teacher-item.component.scss'],
  templateUrl: 'teacher-item.component.html',
})
export class TeacherItemComponent {
  @Input() teacher: TeacherGetListDataRO;

  constructor(private dialog: MatDialog) {}

  @Output() onDelete = new EventEmitter();
  delete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xóa giáo viên?');

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

  @Output() onEdit = new EventEmitter();
  edit() {
    this.onEdit.emit();
  }
}
