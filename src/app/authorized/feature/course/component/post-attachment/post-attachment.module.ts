import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostAttachmentComponent } from './post-attachment.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PostAttachmentComponent],
  exports: [PostAttachmentComponent],
})
export class PostAttachmentModule {}
