import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-header',
  styleUrls: ['comment-header.component.scss'],
  templateUrl: 'comment-header.component.html',
})
export class CommentHeaderComponent {
  @Input() commentCount: number;
}
