import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonCommentGetListDataRO } from '@shared/models/ro/lesson-comment.ro';
import { LessonGetDetailRO } from '@shared/models/ro/lesson.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-comment-detail',
  styleUrls: ['comment-detail.component.scss'],
  templateUrl: 'comment-detail.component.html',
})
export class CommentDetailComponent implements OnInit {
  comments: LessonCommentGetListDataRO[];
  lesson: LessonGetDetailRO;
  commentId: number;
  highlightedCommentId: number;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _lessonCommentService: LessonCommentService,
    private _lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.commentId = +this.route.snapshot.params['id'];
    this.highlightedCommentId = +this.route.snapshot.queryParamMap.get('highlightedCommentId');
    this.loadComments(this.commentId);
  }

  loadComments(commentId: number) {
    this._lessonCommentService.getList({ commentId }).subscribe(data => {
      this.comments = this.transformComments(data.data);
      if (this.comments.length > 0) {
        this._lessonService.getDetail(this.comments[0].lessonId).subscribe(lesson => {
          this.lesson = lesson;
        });
      }
    });
  }

  transformComments(comments: any[]): any[] {
    const commentMap = new Map(comments.map(comment => [comment.id, { ...comment, replies: [] }]));

    comments.forEach(comment => {
      if (comment.parentId !== null && commentMap.has(comment.parentId)) {
        commentMap.get(comment.parentId).replies.push(commentMap.get(comment.id));
      }
    });

    return Array.from(commentMap.values()).filter(comment => comment.id === this.commentId);
  }

  delete(id: number) {
    this._lessonCommentService.delete(id).subscribe(response => {
      this.toast.success('Xóa bình luận thành công');
      this.comments = this.comments.filter(comment => comment.id !== response.id);
    });
  }
}
