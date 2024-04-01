import { Component, Input } from '@angular/core';
import { PostGetListDataRO } from '@shared/models/ro/post.ro';

@Component({
  selector: 'app-post-item',
  styleUrls: ['post-item.component.scss'],
  templateUrl: 'post-item.component.html',
})
export class PostItemComponent {
  @Input() post: PostGetListDataRO;
}
