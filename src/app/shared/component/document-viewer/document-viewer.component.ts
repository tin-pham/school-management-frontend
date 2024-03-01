import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-viewer',
  styleUrls: ['./document-viewer.component.scss'],
  templateUrl: './document-viewer.component.html',
})
export class DocumentViewerComponent {
  @Input() url: string;

  constructor(private sanitizer: DomSanitizer) {}

  get googleUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/viewer?url=${this.url}&embedded=true`);
  }
}
