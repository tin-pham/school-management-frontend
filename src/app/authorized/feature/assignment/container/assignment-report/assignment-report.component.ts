import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentSubmitGetListDTO } from '@shared/models/dto/assignment-submit.dto';
import { AssignmentSubmitGetListDataRO, AssignmentSubmitGetStatisticRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-report',
  styleUrls: ['./assignment-report.component.scss'],
  templateUrl: './assignment-report.component.html',
})
export class AssignmentReportComponent implements OnInit {
  @Input() assignmentId: number;

  statistic: AssignmentSubmitGetStatisticRO;
  submissions: AssignmentSubmitGetListDataRO[] = [];

  constructor(
    private router: Router,
    private _assignmentSubmitService: AssignmentSubmitService,
  ) {}

  ngOnInit() {
    this._assignmentSubmitService.getStatistic({ assignmentId: this.assignmentId }).subscribe(statistic => {
      this.statistic = statistic;
    });
    this.loadSubmissions({ assignmentId: this.assignmentId });
  }

  optionChange(value: string | number) {
    const dto: AssignmentSubmitGetListDTO = { assignmentId: this.assignmentId };

    switch (value) {
      case 'submitted':
        // No additional flags needed, as this might fetch all submissions
        break;
      case 'isCorrect':
        dto.isCorrect = true;
        break;
      case 'pending':
        // Here you might need additional logic to identify pending submissions
        // since your current DTO doesn't directly support it.
        break;
      case 'isLate':
        dto.isLate = true;
        break;
      default:
        break;
    }
    this.loadSubmissions(dto);
  }

  loadSubmissions(dto?: AssignmentSubmitGetListDTO) {
    this._assignmentSubmitService.getList(dto).subscribe(response => {
      this.submissions = response.data;
    });
  }

  routeToSubmission(submissionId: number) {
    this.router.navigate(['/assignment-submit', submissionId]);
  }
}
