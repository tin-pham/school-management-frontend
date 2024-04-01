import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostItemModule } from '@features/course/component/post-item/post-item.module';
import { PostService } from '@core/services/api/post.service';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [SharedModule, PostItemModule],
  declarations: [PostListComponent],
  providers: [PostService],
  exports: [PostListComponent],
})
export class PostListModule {}
