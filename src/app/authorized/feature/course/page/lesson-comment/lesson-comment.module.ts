import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { CommentHeaderModule } from '@features/comment/container/comment-header/comment-header.module';
import { CommentTextboxModule } from '@features/comment/container/comment-textbox/comment-textbox.module';
import { CommentBoxModule } from '@features/comment/container/comment-box/comment-box.module';
import { LessonCommentRoutingModule } from './lesson-comment-routing.module';
import { LessonCommentComponent } from './lesson-comment.component';

@NgModule({
  declarations: [LessonCommentComponent],
  exports: [LessonCommentComponent],
  imports: [LessonCommentRoutingModule, SharedModule, CommentHeaderModule, CommentTextboxModule, CommentBoxModule],
  providers: [LessonCommentService],
})
export class LessonCommentModule {}
