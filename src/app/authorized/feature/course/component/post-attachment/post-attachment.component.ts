import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { PostGetListDataAttachmentRO } from '@shared/models/ro/post.ro';

@Component({
  selector: 'app-post-attachment',
  styleUrls: ['post-attachment.component.scss'],
  templateUrl: 'post-attachment.component.html',
})
export class PostAttachmentComponent {
  @Input() attachment: PostGetListDataAttachmentRO;
  @Input() showDelete = true;

  constructor(private dialog: MatDialog) {}

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

  @Output() onDelete = new EventEmitter();
  delete($event: MouseEvent) {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bạn có muốn xác nhận xóa không?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.onDelete.emit(this.attachment.id);
    });

    $event.stopPropagation();
  }

  click($event: MouseEvent) {
    $event.stopPropagation();
  }
}
