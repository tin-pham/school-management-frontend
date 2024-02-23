import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AuthService } from '@core/services/api/auth.service';
import { AssignmentGetDetailRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-assignment-detail',
  styleUrls: ['assignment-detail.component.scss'],
  templateUrl: 'assignment-detail.component.html',
})
export class AssignmentDetailComponent implements OnInit {
  assignment: AssignmentGetDetailRO;
  assignmentId: number;

  constructor(
    private route: ActivatedRoute,
    private _assignmentService: AssignmentService,
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
  }
}
