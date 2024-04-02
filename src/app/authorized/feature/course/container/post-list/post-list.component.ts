import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { AuthService } from '@core/services/api/auth.service';
import { PostService } from '@core/services/api/post.service';
import { PostGetListDTO } from '@shared/models/dto/post.dto';
import { PostGetListDataRO } from '@shared/models/ro/post.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-post-list',
  styleUrls: ['post-list.component.scss'],
  templateUrl: 'post-list.component.html',
})
export class PostListComponent extends PaginateComponent {
  page = 1;
  itemsPerPage = 5;
  totalItems = 0;

  @Input() courseId: number;

  posts: PostGetListDataRO[];

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private _postService: PostService,
    private _authService: AuthService,
  ) {
    super();
  }

  getDto() {
    const dto = new PostGetListDTO();
    dto.courseId = this.courseId;
    return dto;
  }

  loadData(dto: PostGetListDTO): void {
    this._postService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.posts = response.data;
      this.cd.markForCheck();
    });
  }

  delete(id: number) {
    this._postService.delete(id).subscribe(() => {
      this.toast.success('Xóa bài thành công');
      this.loadData(this.getDto());
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  getUserId() {
    return this._authService.getUserId();
  }
}
