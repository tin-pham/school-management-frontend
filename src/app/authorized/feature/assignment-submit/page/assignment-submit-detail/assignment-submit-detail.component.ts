import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentStoreDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentSubmitGetDetailRO } from '@shared/models/ro/assignment-submit.ro';

@Component({
  selector: 'app-assignment-submit-detail',
  styleUrls: ['assignment-submit-detail.component.scss'],
  templateUrl: 'assignment-submit-detail.component.html',
})
export class AssignmentSubmitDetailComponent implements OnInit {
  dto = new AssignmentStoreDTO();
  submission: AssignmentSubmitGetDetailRO;

  constructor(
    private route: ActivatedRoute,
    private _assignmentSubmitService: AssignmentSubmitService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this._assignmentSubmitService.getDetail(id).subscribe(submission => {
      this.submission = submission;
    });
  }
}
