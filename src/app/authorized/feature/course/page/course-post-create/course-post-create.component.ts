import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CacheForm } from '@core/base/cache-form.base';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { PostService } from '@core/services/api/post.service';
import { CacheStorageService } from '@core/services/cache.service';
import { PostStoreDTO } from '@shared/models/dto/post.dto';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-post-create',
  styleUrls: ['course-post-create.component.scss'],
  templateUrl: 'course-post-create.component.html',
})
export class CoursePostCreateComponent extends CacheForm<PostStoreDTO> implements OnInit {
  dto = new PostStoreDTO();
  attachmentsCreating: File[];

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    _cacheService: CacheStorageService,
    private _postAttachmentService: PostAttachmentService,
    private _postService: PostService,
  ) {
    super(_cacheService, 'course-post-create');
  }

  ngOnInit() {
    this.dto.courseId = +this.route.snapshot.paramMap.get('id');
  }

  onFilesChange(event) {
    this.attachmentsCreating = event.target.files;
  }

  create() {
    if (!this.dto) {
      return;
    }

    this._postService
      .store(this.dto)
      .pipe(
        switchMap(response => {
          if (response && this.attachmentsCreating) {
            return this._postAttachmentService.bulkStore({
              postId: response.id,
              files: this.attachmentsCreating,
            });
          } else {
            return of(null);
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Tạo thành công');
        this.clearForm();
        window.history.back();
      });
  }

  clearForm(): void {
    this.dto = new PostStoreDTO();
    this.attachmentsCreating = null;
    this.removeCache();
  }
}
