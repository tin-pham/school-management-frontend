import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentBoxComponent } from './comment-box.component';

const COMPONENTS = [CommentBoxComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentBoxModule {}
