import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import {
  DocumentViewerDialogComponent,
  DocumentViewerDialogModel,
} from '@shared/component/document-viewer-dialog/document-viewer-dialog.component';
import { AssignmentGetSubmissionRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-file-submission',
  styleUrls: ['./file-submission.component.scss'],
  templateUrl: './file-submission.component.html',
})
export class FileSubmissionComponent {
  @Input() submission: AssignmentGetSubmissionRO;
  @Input() isMissing: boolean;
  @Output() onDelete = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

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

  view() {
    // Ensure you're passing the attachmentUrl to the dialog data
    const dialogData = new DocumentViewerDialogModel(this.submission.attachmentUrl);

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

  isYourFile() {
    return this._authService.getUserId() === this.submission.attachmentCreatedBy;
  }
}
