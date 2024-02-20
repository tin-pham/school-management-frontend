import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { CommentHeaderModule } from '../../container/comment-header/comment-header.module';
import { CommentTextboxModule } from '../../container/comment-textbox/comment-textbox.module';
import { CommentBoxModule } from '../../container/comment-box/comment-box.module';
import { LessonCommentComponent } from './lesson-comment.component';
import { LessonCommentRoutingModule } from './lesson-comment-routing.module';

@NgModule({
  declarations: [LessonCommentComponent],
  exports: [LessonCommentComponent],
  imports: [LessonCommentRoutingModule, SharedModule, CommentHeaderModule, CommentTextboxModule, CommentBoxModule],
  providers: [LessonCommentService],
})
export class LessonCommentModule {}
