import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttachmentService } from '@core/services/api/attachment.service';
import { S3Service } from '@core/services/api/s3.service';
import { AttachmentGetListDTO } from '@shared/models/dto/attachment.dto';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-assignment-submit',
  styleUrls: ['./assignment-submit.component.scss'],
  templateUrl: './assignment-submit.component.html',
})
export class AssignmentSubmitComponent implements OnInit {
  file: File;
  attachment: AttachmentGetListDataRO;
  assignmentId: number;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _s3Service: S3Service,
    private _attachmentService: AttachmentService,
  ) {}

  ngOnInit() {
    this.assignmentId = Number(this.route.snapshot.paramMap.get('assignmentId'));
    this.loadAttachments();
  }

  onFileInputChange(event) {
    this.file = event.target.files[0];
  }

  submit() {
    this._s3Service
      .bulkUpload({ files: [this.file], directoryPath: 'assignment' })
      .pipe(
        switchMap(response => this._attachmentService.bulkStore({ files: response.data })),
        tap(() => this.loadAttachments()),
      )
      .subscribe(() => this.toast.success('Nộp bài thành công'));
  }

  loadAttachments() {
    const dto = new AttachmentGetListDTO({
      assignmentId: this.assignmentId,
    });
    this._attachmentService.getList(dto).subscribe({
      next: response => {
        this.attachment = response.data[0];
      },
    });
  }

  delete() {
    this._attachmentService.bulkDelete({ ids: [this.attachment.id] }).subscribe(() => {
      this.toast.success('Xóa bài nộp thành công');
      this.attachment = null;
    });
  }
}
