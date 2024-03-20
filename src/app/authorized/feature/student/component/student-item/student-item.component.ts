import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { StudentGetListDataRO } from '@shared/models/ro/student.ro';

@Component({
  selector: 'app-student-item',
  styleUrls: ['student-item.component.scss'],
  templateUrl: 'student-item.component.html',
})
export class StudentItemComponent {
  @Input() student: StudentGetListDataRO;

  constructor(private dialog: MatDialog) {}

  @Output() onDelete = new EventEmitter();
  delete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xóa học sinh?');

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
