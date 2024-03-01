import { Component, Input } from '@angular/core';
import { AssignmentSubmitGetStatisticRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-report-header',
  styleUrls: ['./assignment-report-header.component.scss'],
  templateUrl: './assignment-report-header.component.html',
})
export class AssignmentReportHeaderComponent {
  @Input() statistic: AssignmentSubmitGetStatisticRO;
}
