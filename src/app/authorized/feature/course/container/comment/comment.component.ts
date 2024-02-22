import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';

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

  constructor(private dialog: MatDialog) {}

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
}
