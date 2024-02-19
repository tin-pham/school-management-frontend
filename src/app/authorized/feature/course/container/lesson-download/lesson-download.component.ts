import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { LessonAttachmentService } from '@core/services/api/lesson-attachment.service';
import { LessonAttachmentBulkDeleteDTO } from '@shared/models/dto/lesson-attachment.dto';
import { LessonAttachmentGetListDataRO } from '@shared/models/ro/lesson-attachment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-lesson-download',
  styleUrls: ['lesson-download.component.scss'],
  templateUrl: 'lesson-download.component.html',
})
export class LessonDownloadComponent {
  @Input() attachment: LessonAttachmentGetListDataRO;

  constructor(
    private toast: ToastrService,
    private dialog: MatDialog,
    private _lessonAttachmentService: LessonAttachmentService,
  ) {}

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
    const dto = new LessonAttachmentBulkDeleteDTO({
      ids: [this.attachment.id],
    });

    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._lessonAttachmentService.bulkDelete(dto).subscribe(() => {
        this.onDelete.emit();
        this.toast.success('Xóa đính kèm thành công');
      });
    });
  }
}
