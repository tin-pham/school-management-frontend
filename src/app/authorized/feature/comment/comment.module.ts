import { NgModule } from '@angular/core';
import { CommentComponent } from './comment.component';
import { CommentRoutingModule } from './comment-routing.module';

@NgModule({
  declarations: [CommentComponent],
  providers: [],
  imports: [CommentRoutingModule],
})
export class CommentModule {}
