import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { LessonAttachmentGetListDataRO } from '@shared/models/ro/lesson-attachment.ro';

@Component({
  selector: 'app-file-download',
  styleUrls: ['./file-download.component.scss'],
  templateUrl: './file-download.component.html',
})
export class FileDownloadComponent {
  @Input() attachment: LessonAttachmentGetListDataRO;

  constructor(private dialog: MatDialog) {}

  isVideo() {
    const regex = '\b(?:mp4|avi|mov)\b';
    return this.attachment.type.match(regex);
  }

  isCode() {
    const regex = '\b(?:js|css|html|php|c|cpp|ts|py|java|xml|json|md|yml|yaml|go|lua|rb|pl)\b';
    return this.attachment.type.match(regex);
  }

  @Output() onDelete = new EventEmitter();
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
}
