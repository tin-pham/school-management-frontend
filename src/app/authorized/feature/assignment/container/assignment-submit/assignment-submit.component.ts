import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AttachmentService } from '@core/services/api/attachment.service';
import { S3Service } from '@core/services/api/s3.service';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-assignment-submit',
  styleUrls: ['./assignment-submit.component.scss'],
  templateUrl: './assignment-submit.component.html',
})
export class AssignmentSubmitComponent {
  @Input() dueDate: string;
  @Input() attachment: AttachmentGetListDataRO;
  @Input() assignmentId: number;
  @Output() attachmentChange = new EventEmitter();

  file: File;

  onAttachmentChange(attachment: AttachmentGetListDataRO) {
    this.attachmentChange.emit(attachment);
  }

  constructor(
    private toast: ToastrService,
    private _s3Service: S3Service,
    private _attachmentService: AttachmentService,
  ) {}

  onFileInputChange(event) {
    this.file = event.target.files[0];
  }

  submit() {
    this._s3Service
      .bulkUpload({ files: [this.file], directoryPath: 'assignment' })
      .pipe(
        switchMap(response =>
          this._attachmentService.store({
            ...response.data[0],
            assignmentId: this.assignmentId,
          }),
        ),
        tap(response => this.onAttachmentChange(response)),
      )
      .subscribe(() => this.toast.success('Nộp bài thành công'));
  }

  delete() {
    this._attachmentService.bulkDelete({ ids: [this.attachment.id] }).subscribe(() => {
      this.toast.success('Xóa bài nộp thành công');
      this.onAttachmentChange(null);
    });
  }
}
