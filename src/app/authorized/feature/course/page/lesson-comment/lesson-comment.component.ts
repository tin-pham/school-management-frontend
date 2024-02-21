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
      this.comments = data.data;
      console.log(this.comments);
    });
  }
}
