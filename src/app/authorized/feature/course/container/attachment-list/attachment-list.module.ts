import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostAttachmentModule } from '@features/course/component/post-attachment/post-attachment.module';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { AttachmentListComponent } from './attachment-list.component';

@NgModule({
  imports: [SharedModule, PostAttachmentModule],
  declarations: [AttachmentListComponent],
  providers: [PostAttachmentService],
  exports: [AttachmentListComponent],
})
export class AttachmentListModule {}
