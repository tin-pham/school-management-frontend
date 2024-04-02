import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostService } from '@core/services/api/post.service';
import { PostItemModule } from '../post-item/post-item.module';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [SharedModule, PostItemModule],
  declarations: [PostListComponent],
  providers: [PostService],
  exports: [PostListComponent],
})
export class PostListModule {}
