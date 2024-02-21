import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  styleUrls: ['comment-box.component.scss'],
  templateUrl: 'comment-box.component.html',
})
export class CommentBoxComponent {
  @Input() content: string;
  @Input() avatarUrl: string;
  @Input() displayName: string;
  @Input() isReply = false;
  @Input() createdAt: Date;

  get dateAgo() {
    const now = new Date();
    const createdAtDate = new Date(this.createdAt);
    const seconds = Math.floor((now.getTime() - createdAtDate.getTime()) / 1000);

    if (seconds < 60) {
      return 'Just now';
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(seconds / 86400)} days ago`;
    }
  }
}
