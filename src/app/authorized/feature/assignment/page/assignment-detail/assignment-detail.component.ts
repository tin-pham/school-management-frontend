import { Component } from '@angular/core';
import { AttachmentService } from '@core/services/api/attachment.service';
import { S3Service } from '@core/services/api/s3.service';

@Component({
  selector: 'app-assignment-detail',
  styleUrls: ['assignment-detail.component.scss'],
  templateUrl: 'assignment-detail.component.html',
})
export class AssignmentDetailComponent {
  constructor(
    private _attachmentService: AttachmentService,
    private _s3Service: S3Service,
  ) {}

  upload() {}
}
