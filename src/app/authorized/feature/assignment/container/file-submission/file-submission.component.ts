import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';

@Component({
  selector: 'app-file-submission',
  styleUrls: ['./file-submission.component.scss'],
  templateUrl: './file-submission.component.html',
})
export class FileSubmissionComponent {
  @Input() attachment: AttachmentGetListDataRO;
  @Output() onDelete = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  delete() {
    const dialogData = new ConfirmDialogModel('Xác nhận', ' bạn có muốn xác nhận xóa không?');

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
}
