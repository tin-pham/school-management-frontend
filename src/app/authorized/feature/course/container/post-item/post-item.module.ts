import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AttachmentListModule } from '../attachment-list/attachment-list.module';
import { PostItemComponent } from './post-item.component';

@NgModule({
  imports: [SharedModule, AttachmentListModule],
  declarations: [PostItemComponent],
  exports: [PostItemComponent],
})
export class PostItemModule {}
