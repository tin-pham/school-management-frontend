import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryCourseService } from '@core/services/api/category-course.service';
import { SharedModule } from '@shared/shared.module';
import { PostListModule } from '@features/course/container/post-list/post-list.module';
import { CoursePostComponent } from './course-post.component';
import { CoursePostRoutingModule } from './course-post-routing.module';

@NgModule({
  declarations: [CoursePostComponent],
  imports: [CoursePostRoutingModule, SharedModule, PostListModule],
  providers: [CategoryService, CategoryCourseService],
})
export class CoursePostModule {}
