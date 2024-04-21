import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { LessonCommentGetListDataRO } from '@shared/models/ro/lesson-comment.ro';
import { getGravatarUrl } from '@shared/util/random-avatar';

@Component({
  selector: 'app-comment-item',
  styleUrls: ['comment-item.component.scss'],
  templateUrl: 'comment-item.component.html',
})
export class CommentItemComponent {
  @Input() comment: LessonCommentGetListDataRO;
  @Input() highlighted = false;

  minimizeVisible = true;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
  ) {}

  @Output() minimizeClick = new EventEmitter();
  onMinimizeClick() {
    this.minimizeVisible = false;
    this.minimizeClick.emit();
  }

  @Output() expandClick = new EventEmitter();
  onExpandClick() {
    this.minimizeVisible = true;
    this.expandClick.emit();
  }

  @Output() replyClick = new EventEmitter();
  onReplyClick() {
    this.replyClick.emit();
  }

  @Output() editClick = new EventEmitter();
  onEditClick() {
    this.editClick.emit();
  }

  @Output() deleteClick = new EventEmitter();
  onDeleteClick() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xóa bình luận?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.deleteClick.emit();
    });
  }

  isYourComment() {
    return this._authService.getUserId() === this.comment.userId;
  }

  get dateAgo() {
    const now = new Date();
    const createdAtDate = new Date(this.comment.createdAt);
    const seconds = Math.floor((now.getTime() - createdAtDate.getTime()) / 1000);

    if (seconds < 60) {
      return 'Bây giờ';
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} phút trước`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} giờ trước`;
    } else {
      return `${Math.floor(seconds / 86400)} ngày trước`;
    }
  }

  haveReplies() {
    return this.comment.replies && this.comment.replies.length > 0;
  }

  getAvatarUrl() {
    return this.comment?.userImageUrl || getGravatarUrl(this.comment?.userId, this.comment?.username);
  }
}
