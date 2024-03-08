import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentBoxModule } from '@features/comment/container/comment-box/comment-box.module';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { LessonService } from '@core/services/api/lesson.service';
import { CommentDetailComponent } from './comment-detail.component';
import { CommentDetailRoutingModule } from './comment-detail-routing.module';

@NgModule({
  declarations: [CommentDetailComponent],
  imports: [CommentDetailRoutingModule, SharedModule, CommentBoxModule],
  providers: [LessonCommentService, LessonService],
})
export class CommentDetailModule {}
