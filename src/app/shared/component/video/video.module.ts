import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SafePipe } from '@shared/pipe/safe.pipe';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [YouTubePlayerModule],
  declarations: [VideoComponent, SafePipe],
  exports: [VideoComponent],
})
export class VideoModule {}
