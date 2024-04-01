import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostAttachmentModule } from '../post-attachment/post-attachment.module';
import { PostItemComponent } from './post-item.component';

@NgModule({
  imports: [SharedModule, PostAttachmentModule],
  declarations: [PostItemComponent],
  exports: [PostItemComponent],
})
export class PostItemModule {}
