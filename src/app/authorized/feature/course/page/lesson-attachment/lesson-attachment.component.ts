import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonAttachmentService } from '@core/services/api/lesson-attachment.service';
import { S3Service } from '@core/services/api/s3.service';
import { LessonAttachmentBulkStoreDTO } from '@shared/models/dto/lesson-attachment.dto';
import { LessonAttachmentGetListDataRO } from '@shared/models/ro/lesson-attachment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { first, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-lesson-attachment',
  styleUrls: ['lesson-attachment.component.scss'],
  templateUrl: 'lesson-attachment.component.html',
})
export class LessonAttachmentComponent implements OnInit {
  lessonId: number;
  attachmentsCreating: File[];
  attachments: LessonAttachmentGetListDataRO[];

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _s3Service: S3Service,
    private _lessonAttachmentService: LessonAttachmentService,
  ) {}

  ngOnInit() {
    this.lessonId = +this.route.parent.snapshot.paramMap.get('lessonId');
    this._lessonAttachmentService
      .getList({
        lessonId: this.lessonId,
      })
      .subscribe(response => {
        this.attachments = response.data;
      });
  }

  onFilesChange(event) {
    this.attachmentsCreating = event.target.files;
  }

  upload() {
    this._s3Service
      .bulkUpload({
        files: this.attachmentsCreating,
        directoryPath: 'lesson/attachment',
      })
      .pipe(
        switchMap(response => {
          const dto = new LessonAttachmentBulkStoreDTO({
            lessonId: this.lessonId,
            files: response.data,
          });

          return this._lessonAttachmentService.bulkStore(dto);
        }),
        switchMap(() => this._lessonAttachmentService.getList({ lessonId: this.lessonId }).pipe(tap(response => (this.attachments = response.data)))),
        first(), // Ensure it only subscribes once
      )
      .subscribe(() => this.toast.success('Tải tệp lên thành công'));
  }
}
