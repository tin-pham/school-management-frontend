import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentGetDetailRO, AssignmentGetSubmissionRO } from '@shared/models/ro/assignment.ro';

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
    private _authService: AuthService,
    private _assignmentService: AssignmentService,
  ) {}

  ngOnInit() {
    this.assignmentId = this.route.snapshot.params['id'];
    this._assignmentService.getDetail(this.assignmentId).subscribe(assignment => {
      this.assignment = assignment;
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  showReport() {
    return this._authService.isTeacher() || this._authService.isAdmin();
  }

  isYourCourse() {
    return this.assignment.createdBy === this._authService.getUserId();
  }
}
