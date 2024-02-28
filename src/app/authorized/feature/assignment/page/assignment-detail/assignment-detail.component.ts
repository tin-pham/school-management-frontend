import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { Assignment } from '@shared/models/class/assignment';
import { AssignmentSubmitStoreDTO } from '@shared/models/dto/assignment-submit.dto';
import { AssignmentGetDetailRO, AssignmentGetSubmissionRO } from '@shared/models/ro/assignment.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-assignment-detail',
  styleUrls: ['assignment-detail.component.scss'],
  templateUrl: 'assignment-detail.component.html',
})
export class AssignmentDetailComponent implements OnInit {
  assignment: AssignmentGetDetailRO;
  assignmentId: number;
  submission: AssignmentGetSubmissionRO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _assignmentService: AssignmentService,
    private _authService: AuthService,
    private _assignmentSubmitService: AssignmentSubmitService,
  ) {}

  isStudent() {
    return this._authService.isStudent();
  }

  ngOnInit() {
    this.assignmentId = this.route.snapshot.params['id'];
    this._assignmentService.getDetail(this.assignmentId).subscribe(assignment => {
      this.assignment = assignment;
    });
    this.loadAttachment();
  }

  loadAttachment() {
    this._assignmentService.getSubmission(this.assignmentId).subscribe(submission => {
      this.submission = submission;
    });
  }

  isMissing() {
    const assignment = new Assignment(this.assignment.dueDate, this.submission.attachmentCreatedAt.toString());
    return assignment.isMissing();
  }

  submit(file: File) {
    const dto = new AssignmentSubmitStoreDTO({
      file,
      assignmentId: this.assignmentId,
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
}
