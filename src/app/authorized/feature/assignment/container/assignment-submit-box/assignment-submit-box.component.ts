import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { Assignment } from '@shared/models/class/assignment';
import { AssignmentSubmitStoreDTO } from '@shared/models/dto/assignment-submit.dto';
import { AssignmentGetDetailRO, AssignmentGetSubmissionRO } from '@shared/models/ro/assignment.ro';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-assignment-submit-box',
  styleUrls: ['./assignment-submit-box.component.scss'],
  templateUrl: './assignment-submit-box.component.html',
})
export class AssignmentSubmitBoxComponent implements OnInit {
  @Input() dueDate: string;
  @Input() submission: AssignmentGetSubmissionRO;
  @Input() assignment: AssignmentGetDetailRO;
  @Output() submissionChange = new EventEmitter();

  file: File;

  constructor(
    private toast: ToastrService,
    private _authService: AuthService,
    private _assignmentSubmitService: AssignmentSubmitService,
    private _assignmentService: AssignmentService,
  ) {}

  ngOnInit() {
    this.isStudent() && this.loadAttachment();
  }

  loadAttachment() {
    this._assignmentService.getSubmission(this.assignment.id).subscribe(submission => {
      this.submission = submission;
      console.log(this.assignment.id);
      console.log(this.submission);
    });
  }

  onSubmissionChange(attachment: Partial<AttachmentGetListDataRO>) {
    this.submissionChange.emit(attachment);
  }

  onFileInputChange(event) {
    this.file = event.target.files[0];
  }

  submit() {
    const dto = new AssignmentSubmitStoreDTO({
      file: this.file,
      assignmentId: this.assignment.id,
    });
    this._assignmentSubmitService.store(dto).subscribe(() => {
      this.toast.success('Nộp bài thành công');
      this.loadAttachment();
    });
  }

  delete() {
    this._assignmentSubmitService.delete(this.submission.id).subscribe(() => {
      this.toast.success('Xóa bài nộp thành công');
      this.submission = null;
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  isMissing() {
    const assignment = new Assignment(this.assignment.dueDate, this.submission.attachmentCreatedAt.toString());
    return assignment.isMissing();
  }
}
