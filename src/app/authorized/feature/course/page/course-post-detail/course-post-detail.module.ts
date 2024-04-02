import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostService } from '@core/services/api/post.service';
import { PostItemModule } from '@features/course/container/post-item/post-item.module';
import { CoursePostDetailComponent } from './course-post-detail.component';
import { CoursePostDetailRoutingModule } from './course-post-detail-routing.module';

@NgModule({
  declarations: [CoursePostDetailComponent],
  imports: [CoursePostDetailRoutingModule, SharedModule, PostItemModule],
  providers: [PostService],
})
export class CoursePostDetailModule {}
