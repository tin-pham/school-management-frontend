import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  styleUrls: ['comment.component.scss'],
  templateUrl: 'comment.component.html',
})
export class CommentComponent {
  @Input() commentId: number;
  @Input() content: string;
  @Input() avatarUrl: string;
  @Input() displayName: string;
  @Input() dateAgo: string;
  @Input() depth: number = 0;

  @Output() replyClick = new EventEmitter();
  onReplyClick() {
    this.replyClick.emit();
  }
}
