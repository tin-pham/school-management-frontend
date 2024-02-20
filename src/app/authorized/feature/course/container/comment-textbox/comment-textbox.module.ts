import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentTextboxComponent } from './comment-textbox.component';

const COMPONENTS = [CommentTextboxComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentTextboxModule {}
