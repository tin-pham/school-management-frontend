import { Component, Input } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { PostAttachmentService } from '@core/services/api/post-attachment.service';
import { PostAttachmentBulkDeleteDTO } from '@shared/models/dto/post-assignment.dto';
import { PostGetListDataAttachmentRO } from '@shared/models/ro/post.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-attachment-list',
  styleUrls: ['attachment-list.component.scss'],
  templateUrl: 'attachment-list.component.html',
})
export class AttachmentListComponent {
  @Input() attachments: PostGetListDataAttachmentRO[];
  @Input() courseCreatedBy: number;

  constructor(
    private toast: ToastrService,
    private _authService: AuthService,
    private _courseAttachmentService: PostAttachmentService,
  ) {}

  showDelete() {
    const isNotStudent = !this._authService.isStudent();
    const isYourCource = this.courseCreatedBy === this._authService.getUserId();
    return isNotStudent && isYourCource;
  }

  delete(attachmentId: number) {
    const dto = new PostAttachmentBulkDeleteDTO({
      attachmentIds: [attachmentId],
    });
    this._courseAttachmentService.bulkDelete(dto).subscribe(() => {
      this.attachments = this.attachments.filter(attachment => attachment.id !== attachmentId);
      this.toast.success('Xóa thành công');
    });
  }
}
