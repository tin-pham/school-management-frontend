import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { LessonCommentStoreDTO } from '@shared/models/dto/lesson-comment.dto';
import { LessonCommentGetListDataRO } from '@shared/models/ro/lesson-comment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-lesson-comment',
  styleUrls: ['lesson-comment.component.scss'],
  templateUrl: 'lesson-comment.component.html',
})
export class LessonCommentComponent implements OnInit {
  commentCreating = new LessonCommentStoreDTO();
  comments: LessonCommentGetListDataRO[];
  lessonId: number;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _lessonCommentService: LessonCommentService,
  ) {}

  ngOnInit() {
    this.lessonId = +this.route.snapshot.params['lessonId'];
    this.commentCreating.lessonId = this.lessonId;
    this.loadComments();
  }

  comment() {
    this._lessonCommentService.store(this.commentCreating).subscribe(() => {
      this.toast.success('Bình luận thành công');
      this.loadComments();
    });
  }

  loadComments() {
    this._lessonCommentService.getList({ lessonId: this.lessonId }).subscribe(data => {
      this.comments = this.transformComments(data.data);
    });
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

  delete(id: number) {
    this._lessonCommentService.delete(id).subscribe(response => {
      this.toast.success('Xóa bình luận thành công');
      this.comments = this.comments.filter(comment => comment.id !== response.id);
    });
  }
}
