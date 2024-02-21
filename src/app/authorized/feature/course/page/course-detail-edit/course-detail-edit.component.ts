import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttachmentService } from '@core/services/api/attachment.service';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { S3Service } from '@core/services/api/s3.service';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from 'ngx-toastr';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-course-detail-edit',
  styleUrls: ['course-detail-edit.component.scss'],
  templateUrl: 'course-detail-edit.component.html',
})
export class CourseDetailEditComponent implements OnInit {
  course: CourseGetDetailRO;
  categories: CategoryGetListDataRO[];

  image: File;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _s3Service: S3Service,
    private _courseService: CourseService,
    private _categoryService: CategoryService,
    private _attachmentService: AttachmentService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._courseService.getDetail(id, { withCategoryIds: true }).subscribe({
      next: response => {
        this.course = response;
      },
    });
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
      },
    });
  }

  update() {
    if (!this.image) {
      this._courseService.update(this.course.id, this.course).subscribe({
        next: () => {
          this.toast.success('Cập nhật khóa học thành công');
          window.history.back();
        },
      });
    }

    if (this.course.imageId && this.image) {
      this._s3Service
        .bulkDelete({ urls: [this.course.image.url] })
        .pipe(switchMap(() => this._attachmentService.bulkDelete({ ids: [this.course.imageId] })))
        .subscribe();
    }

    this._s3Service
      .bulkUpload({ files: [this.image], directoryPath: 'course' })
      .pipe(
        switchMap(response => this._attachmentService.store(response.data[0])),
        tap(attachment => (this.course.imageId = attachment.id)),
        switchMap(() => this._courseService.update(this.course.id, this.course)),
      )
      .subscribe(() => {
        this.toast.success('Lưu thay đổi thành công');
        window.history.back();
      });
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }
}
