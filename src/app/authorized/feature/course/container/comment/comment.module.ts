import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentComponent } from './comment.component';

const COMPONENTS = [CommentComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentModule {}
