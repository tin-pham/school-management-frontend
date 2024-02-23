import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IReplyState, LessonCommentService } from '@core/services/api/lesson-comment.service';
import { LessonCommentStoreDTO } from '@shared/models/dto/lesson-comment.dto';
import { LessonCommentGetListDataRO } from '@shared/models/ro/lesson-comment.ro';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-comment-box',
  styleUrls: ['comment-box.component.scss'],
  templateUrl: 'comment-box.component.html',
})
export class CommentBoxComponent implements OnInit, OnDestroy {
  @Input() comment: LessonCommentGetListDataRO;

  commentCreating = new LessonCommentStoreDTO();

  private destroy$ = new Subject<void>();
  isReplying: IReplyState;

  commentBoxVisiblity = false;
  replyCommentsVisibility = true;
  isEditing = false;

  constructor(
    private toast: ToastrService,
    private router: Router,
    private _lessonCommentService: LessonCommentService,
  ) {}

  ngOnInit() {
    this._lessonCommentService.isReplying$.pipe(takeUntil(this.destroy$)).subscribe(isReplyingState => {
      this.isReplying = isReplyingState;
      // Set comment box visibility to true only if this comment box's ID matches the one in the isReplyingState and isReplying is true
      if (isReplyingState.isReplying && isReplyingState.commentId === this.comment.id) {
        this.commentBoxVisiblity = true;
      } else {
        // Hide this comment box if another comment box is being replied to
        this.commentBoxVisiblity = false;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  routeCommentDetail() {
    this.router.navigate(['comment', this.comment.id]);
  }

  minimizeComments() {
    this.replyCommentsVisibility = false;
  }

  expandComments() {
    this.replyCommentsVisibility = true;
  }

  @Output() onDelete = new EventEmitter<void>();
  delete() {
    this.onDelete.emit();
  }

  handleDelete(id: number) {
    this._lessonCommentService.delete(id).subscribe(response => {
      this.toast.success('Xóa bình luận thành công');
      this.comment.replies = this.comment.replies.filter(comment => comment.id !== response.id);
    });
  }

  cancelEdit() {
    this.isEditing = false;
  }

  toggleEdit() {
    this.isEditing = true;
  }

  edit() {
    this._lessonCommentService.update(this.comment.id, this.comment).subscribe(updatedComment => {
      this.comment = {
        ...this.comment,
        ...updatedComment,
      };
      this.isEditing = false;
      this.toast.success('Cập nhật bình luận thành công');
    });
  }

  clearReply() {
    this.commentCreating.body = '';
  }

  reply() {
    const dto = new LessonCommentStoreDTO({
      body: this.commentCreating.body,
      parentId: this.comment.id,
      lessonId: this.comment.lessonId,
    });
    this._lessonCommentService.store(dto).subscribe(newComment => {
      this.toast.success('Phản hồi thành công');
      this.comment.replies.push({
        ...newComment,
        depth: this.comment.depth + 1,
      });
      this.toggleReply();
    });
  }

  toggleReply() {
    this._lessonCommentService.setIsReplying({
      isReplying: !this.commentBoxVisiblity,
      commentId: this.comment.id, // This comment's ID
    });
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

  transformComments(comments: any[]): any[] {
    const commentMap = new Map(comments.map(comment => [comment.id, { ...comment, replies: [] }]));

    comments.forEach(comment => {
      if (comment.parentId !== null && commentMap.has(comment.parentId)) {
        commentMap.get(comment.parentId).replies.push(commentMap.get(comment.id));
      }
    });

    // Filter out only top-level comments (those without a parentId)
    return Array.from(commentMap.values()).filter(comment => comment.parentId === null);
  }
}
