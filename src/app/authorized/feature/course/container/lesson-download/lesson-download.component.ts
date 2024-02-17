import { Component, Input } from '@angular/core';
import { LessonAttachmentGetListDataRO } from '@shared/models/ro/lesson-attachment.ro';

@Component({
  selector: 'app-lesson-download',
  styleUrls: ['lesson-download.component.scss'],
  templateUrl: 'lesson-download.component.html',
})
export class LessonDownloadComponent {
  @Input() attachment: LessonAttachmentGetListDataRO;

  isVideo() {
    const regex = '\b(?:mp4|avi|mov)\b';
    return this.attachment.type.match(regex);
  }

  isCode() {
    const regex = '\b(?:js|css|html|php|c|cpp|ts|py|java|xml|json|md|yml|yaml|go|lua|rb|pl)\b';
    return this.attachment.type.match(regex);
  }
}
