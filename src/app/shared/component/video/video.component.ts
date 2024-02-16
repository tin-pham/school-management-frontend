import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  selector: 'app-video',
})
export class VideoComponent {
  @Input() videoUrl: string;

  getVideoEmbedUrl(videoUrl: string) {
    return `https://www.youtube.com/embed/${this.getVideoId(videoUrl)}`;
  }

  getVideoId(url: string) {
    const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(url)[3];
  }
}
