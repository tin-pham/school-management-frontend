import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { LessonAttachmentService } from '@core/services/api/lesson-attachment.service';
import { S3Service } from '@core/services/api/s3.service';
import { LessonAttachmentBulkStoreDTO, LessonAttachmentGetListDTO } from '@shared/models/dto/lesson-attachment.dto';
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

  totalItems: number;
  itemsPerPage = 5;
  page = 1;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private cd: ChangeDetectorRef,
    private _s3Service: S3Service,
    private _lessonAttachmentService: LessonAttachmentService,
  ) {}

  ngOnInit() {
    this.lessonId = +this.route.parent.snapshot.paramMap.get('lessonId');
    this.loadAttachments({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
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
        tap(() =>
          this.loadAttachments({
            limit: this.itemsPerPage,
            page: this.page,
            lessonId: this.lessonId,
          }),
        ),
        first(), // Ensure it only subscribes once
      )
      .subscribe(() => this.toast.success('Tải tệp lên thành công'));
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadAttachments({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
    });
  }

  loadAttachments(dto: LessonAttachmentGetListDTO) {
    const { limit, page, lessonId } = dto;
    this._lessonAttachmentService.getList({ limit, page, lessonId }).subscribe({
      next: response => {
        this.attachments = response.data;
        this.totalItems = response.meta.totalItems;
        this.cd.markForCheck();
      },
    });
  }

  onDelete() {
    this.loadAttachments({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
    });
  }
}
