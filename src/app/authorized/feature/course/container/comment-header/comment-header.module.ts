import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentHeaderComponent } from './comment-header.component';

const COMPONENTS = [CommentHeaderComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentHeaderModule {}
