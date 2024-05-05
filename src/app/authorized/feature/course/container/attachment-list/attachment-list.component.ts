import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@core/services/api/auth.service';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import {
  DocumentViewerDialogComponent,
  DocumentViewerDialogModel,
} from '@shared/component/document-viewer-dialog/document-viewer-dialog.component';
import { PostAttachmentBulkDeleteDTO } from '@shared/models/dto/post-assignment.dto';
import { PostGetListDataAttachmentRO } from '@shared/models/ro/post.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-attachment-list',
  styleUrls: ['attachment-list.component.scss'],
  templateUrl: 'attachment-list.component.html',
})
export class AttachmentListComponent {
  @Input() attachments: PostGetListDataAttachmentRO[];
  @Input() courseCreatedBy: number;

  constructor(
    private toast: ToastrService,
    private dialog: MatDialog,
    private _authService: AuthService,
    private _courseAttachmentService: PostAttachmentService,
  ) {}

  showDelete() {
    const isNotStudent = !this._authService.isStudent();
    const isYourCource = this.courseCreatedBy === this._authService.getUserId();
    return isNotStudent && isYourCource;
  }

  delete(attachmentId: number) {
    const dto = new PostAttachmentBulkDeleteDTO({
      attachmentIds: [attachmentId],
    });
    this._courseAttachmentService.bulkDelete(dto).subscribe(() => {
      this.attachments = this.attachments.filter(attachment => attachment.id !== attachmentId);
      this.toast.success('Xóa thành công');
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  view(url: string) {
    // Ensure you're passing the attachmentUrl to the dialog data
    const dialogData = new DocumentViewerDialogModel(url);

    const dialogRef = this.dialog.open(DocumentViewerDialogComponent, {
      data: dialogData,
      width: '80vw', // 80% of the viewport width
      height: '95vh', // 80% of the viewport height
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
    });
  }
}
