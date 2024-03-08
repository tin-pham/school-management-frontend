import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonCommentService } from '@core/services/api/lesson-comment.service';
import { LessonService } from '@core/services/api/lesson.service';
import { CommentTextboxModule } from '../comment-textbox/comment-textbox.module';
import { CommentItemModule } from '../comment-item/comment-item.module';
import { CommentBoxComponent } from './comment-box.component';

const COMPONENTS = [CommentBoxComponent];

@NgModule({
  imports: [SharedModule, CommentTextboxModule, CommentItemModule],
  declarations: [...COMPONENTS],
  providers: [LessonCommentService],
  exports: [...COMPONENTS],
})
export class CommentBoxModule {}
