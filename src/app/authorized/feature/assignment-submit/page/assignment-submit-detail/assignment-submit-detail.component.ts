import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentSubmitGradeService } from '@core/services/api/assignment-submit-grade.service';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentSubmitGradeStoreDTO } from '@shared/models/dto/aassignment-submit-grade.dto';
import { AssignmentStoreDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentSubmitGetDetailRO, AssignmentSubmitGetGradeRO } from '@shared/models/ro/assignment-submit.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-assignment-submit-detail',
  styleUrls: ['assignment-submit-detail.component.scss'],
  templateUrl: 'assignment-submit-detail.component.html',
})
export class AssignmentSubmitDetailComponent implements OnInit {
  dto = new AssignmentStoreDTO();
  submission: AssignmentSubmitGetDetailRO;
  grade: AssignmentSubmitGetGradeRO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _assignmentSubmitService: AssignmentSubmitService,
    private _assignmentSubmitGradeService: AssignmentSubmitGradeService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this._assignmentSubmitService.getDetail(id).subscribe(submission => {
      this.submission = submission;
    });
    this._assignmentSubmitService.getGrade(id).subscribe(grade => {
      this.grade = grade;
    });
  }

  delete() {
    this._assignmentSubmitGradeService.delete(this.grade.id).subscribe(() => {
      this.toast.success('Xóa điểm thành công');
      this.grade = null;
    });
  }

  submitGrade(dto: AssignmentSubmitGradeStoreDTO) {
    this._assignmentSubmitGradeService.store({ ...dto, assignmentSubmitId: this.submission.id }).subscribe(response => {
      this.toast.success('Chấm điểm thành công');
      this.grade = response;
    });
  }
}
