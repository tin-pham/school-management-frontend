import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  styleUrls: ['comment-box.component.scss'],
  templateUrl: 'comment-box.component.html',
})
export class CommentBoxComponent {
  @Input() content: string;
  @Input() avatarUrl: string;
  @Input() isReply = false;
}
