import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommentItemComponent } from './comment-item.component';

const COMPONENTS = [CommentItemComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CommentItemModule {}
