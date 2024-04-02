import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@core/services/api/course.service';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { PostService } from '@core/services/api/post.service';
import { PostAttachmentBulkDeleteDTO } from '@shared/models/dto/post-assignment.dto';
import { PostUpdateDTO } from '@shared/models/dto/post.dto';
import { PostGetDetailRO } from '@shared/models/ro/post.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-post-edit',
  styleUrls: ['course-post-edit.component.scss'],
  templateUrl: 'course-post-edit.component.html',
})
export class CoursePostEditComponent implements OnInit {
  postId: number;
  post: PostGetDetailRO;
  dto = new PostUpdateDTO();
  attachmentsCreating: File[];

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _postService: PostService,
    private _postAttachmentService: PostAttachmentService,
  ) {}

  ngOnInit() {
    this.postId = +this.route.snapshot.paramMap.get('postId');
    this._postService.getDetail(this.postId).subscribe(post => {
      this.post = post;
      this.dto.content = post.content;
    });
  }

  onFilesChange(event) {
    this.attachmentsCreating = event.target.files;
  }

  update() {
    if (!this.dto.content) {
      return;
    }

    this._postService
      .update(this.postId, this.dto)
      .pipe(
        switchMap(() => {
          if (this.attachmentsCreating) {
            return this._postAttachmentService.bulkStore({ files: this.attachmentsCreating, postId: this.postId });
          } else {
            return of(null);
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Cập nhật thành công');
      });
  }

  deleteAttachment(attachmentId: number) {
    const dto = new PostAttachmentBulkDeleteDTO({
      attachmentIds: [attachmentId],
    });

    this._postAttachmentService.bulkDelete(dto).subscribe(() => {
      this.post.attachments = this.post.attachments.filter(attachment => attachment.id !== attachmentId);
      this.toast.success('Xóa thành công');
    });
  }
}
