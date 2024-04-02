import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { PostService } from '@core/services/api/post.service';
import { AttachmentListModule } from '@features/course/container/attachment-list/attachment-list.module';
import { CoursePostEditRoutingModule } from './course-post-edit-routing.module';
import { CoursePostEditComponent } from './course-post-edit.component';

@NgModule({
  declarations: [CoursePostEditComponent],
  imports: [CoursePostEditRoutingModule, SharedModule, AttachmentListModule],
  providers: [PostService, PostAttachmentService],
})
export class CoursePostEditModule {}
