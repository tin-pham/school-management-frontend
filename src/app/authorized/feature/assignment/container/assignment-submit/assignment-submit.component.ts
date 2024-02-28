import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentGetSubmissionRO } from '@shared/models/ro/assignment.ro';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';

@Component({
  selector: 'app-assignment-submit',
  styleUrls: ['./assignment-submit.component.scss'],
  templateUrl: './assignment-submit.component.html',
})
export class AssignmentSubmitComponent {
  @Input() dueDate: string;
  @Input() submission: AssignmentGetSubmissionRO;
  @Input() assignmentId: number;
  @Input() isMissing: boolean;
  @Output() submissionChange = new EventEmitter();

  file: File;

  onSubmissionChange(attachment: Partial<AttachmentGetListDataRO>) {
    this.submissionChange.emit(attachment);
  }

  onFileInputChange(event) {
    this.file = event.target.files[0];
  }

  @Output() onSubmitClick = new EventEmitter<File>();
  submitClick() {
    this.onSubmitClick.emit(this.file);
  }

  @Output() onDeleteClick = new EventEmitter();
  deleteClick() {
    this.onDeleteClick.emit();
  }
}
