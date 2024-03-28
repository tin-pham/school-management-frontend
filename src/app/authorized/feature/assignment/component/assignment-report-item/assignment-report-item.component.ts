import { Component, Input } from '@angular/core';
import { AssignmentSubmitGetListDataRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-report-item',
  styleUrls: ['./assignment-report-item.component.scss'],
  templateUrl: './assignment-report-item.component.html',
})
export class AssignmentReportItemComponent {
  @Input() assignmentSubmit: AssignmentSubmitGetListDataRO;
}
