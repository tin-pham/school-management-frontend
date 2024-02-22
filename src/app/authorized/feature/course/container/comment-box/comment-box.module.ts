import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentTextboxModule } from '../comment-textbox/comment-textbox.module';
import { CommentModule } from '../comment/comment.module';
import { CommentBoxComponent } from './comment-box.component';

const COMPONENTS = [CommentBoxComponent];

@NgModule({
  imports: [SharedModule, CommentTextboxModule, CommentModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentBoxModule {}
