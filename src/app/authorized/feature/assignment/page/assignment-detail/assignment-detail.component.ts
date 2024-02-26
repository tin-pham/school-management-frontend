import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AttachmentService } from '@core/services/api/attachment.service';
import { AuthService } from '@core/services/api/auth.service';
import { Assignment } from '@shared/models/class/assignment';
import { AttachmentGetListDTO } from '@shared/models/dto/attachment.dto';
import { AssignmentGetDetailRO } from '@shared/models/ro/assignment.ro';
import { AttachmentGetListDataRO } from '@shared/models/ro/attachment.ro';

@Component({
  selector: 'app-assignment-detail',
  styleUrls: ['assignment-detail.component.scss'],
  templateUrl: 'assignment-detail.component.html',
})
export class AssignmentDetailComponent implements OnInit {
  assignment: AssignmentGetDetailRO;
  assignmentId: number;
  attachment: AttachmentGetListDataRO;

  constructor(
    private route: ActivatedRoute,
    private _assignmentService: AssignmentService,
    private _attachmentService: AttachmentService,
    private _authService: AuthService,
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
    const dto = new AttachmentGetListDTO({
      assignmentId: this.assignmentId,
      creeatedBy: this._authService.getUserId(),
    });
    this._attachmentService.getList(dto).subscribe(attachment => {
      this.attachment = attachment.data[0];
    });
  }

  isMissing() {
    const assignment = new Assignment(this.assignment.dueDate, this.attachment.createdAt.toString());
    return assignment.isMissing();
  }
}
