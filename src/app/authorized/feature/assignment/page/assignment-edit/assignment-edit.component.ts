import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentGetDetailRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-assignment-edit',
  styleUrls: ['assignment-edit.component.scss'],
  templateUrl: 'assignment-edit.component.html',
})
export class AssignmentEditComponent implements OnInit {
  assignment: AssignmentGetDetailRO;
  assignmentId: number;

  constructor(
    private route: ActivatedRoute,
    private _assignmentService: AssignmentService,
  ) {}

  ngOnInit() {
    this.assignmentId = this.route.snapshot.params['id'];
    this._assignmentService.getDetail(this.assignmentId).subscribe(assignment => {
      this.assignment = assignment;
    });
  }

  update() {
    this._assignmentService.update(this.assignmentId, this.assignment).subscribe(() => {
      this._assignmentService.getDetail(this.assignmentId).subscribe(assignment => {
        this.assignment = assignment;
      });
    });
  }
}
