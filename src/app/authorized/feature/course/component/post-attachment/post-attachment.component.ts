import { Component, Input } from '@angular/core';
import { PostGetListDataAttachmentRO } from '@shared/models/ro/post.ro';

@Component({
  selector: 'app-post-attachment',
  styleUrls: ['post-attachment.component.scss'],
  templateUrl: 'post-attachment.component.html',
})
export class PostAttachmentComponent {
  @Input() attachment: PostGetListDataAttachmentRO;

  // Function to determine the border color based on the file extension
  getBorderColor() {
    const extension = this.attachment?.type.toLowerCase();
    switch (extension) {
      case 'xlsx':
        return '#217346'; // Excel files
      case 'docx':
        return '#2B579A'; // Word files
      case 'pdf':
        return '#E53E30'; // PDF files
      default:
        return '#e0e0e0'; // Default border color
    }
  }
}
