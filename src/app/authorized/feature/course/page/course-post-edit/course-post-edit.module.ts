import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { PostService } from '@core/services/api/post.service';
import { CoursePostCreateComponent } from './course-post-create.component';
import { CoursePostCreateRoutingModule } from './course-post-create-routing.module';

@NgModule({
  declarations: [CoursePostCreateComponent],
  imports: [CoursePostCreateRoutingModule, SharedModule],
  providers: [PostService, PostAttachmentService],
})
export class CoursePostCreateModule {}
