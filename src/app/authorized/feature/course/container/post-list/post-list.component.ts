import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { PostService } from '@core/services/api/post.service';
import { PostGetListDTO } from '@shared/models/dto/post.dto';
import { PostGetListDataRO } from '@shared/models/ro/post.ro';

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
    private _postService: PostService,
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
}
