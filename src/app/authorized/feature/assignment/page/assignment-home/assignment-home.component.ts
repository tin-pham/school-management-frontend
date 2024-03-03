import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentGetMyListDataRO } from '@shared/models/ro/assignment.ro';

@Component({
  selector: 'app-assignment-home',
  styleUrls: ['assignment-home.component.scss'],
  templateUrl: 'assignment-home.component.html',
})
export class AssignmentHomeComponent implements OnInit {
  assignments: AssignmentGetMyListDataRO[];

  constructor(private _assignmentService: AssignmentService) {}

  ngOnInit() {
    this._assignmentService.getMyList().subscribe(response => {
      this.assignments = response.data;
    });
  }
}
