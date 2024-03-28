import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentSubmitGradeService } from '@core/services/api/assignment-submit-grade.service';
import { AssignmentSubmitGradeStoreDTO } from '@shared/models/dto/aassignment-submit-grade.dto';
import { AssignmentSubmitGetGradeRO } from '@shared/models/ro/assignment-submit.ro';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assignment-submit-grade-form',
  styleUrls: ['./assignment-submit-grade-form.component.scss'],
  templateUrl: './assignment-submit-grade-form.component.html',
})
export class AssignmentSubmitGradeFormComponent {
  dto = new AssignmentSubmitGradeStoreDTO();
  @Input() grade: AssignmentSubmitGetGradeRO;
  @Input() submissionId: number;
  @Output() gradeChange = new EventEmitter<AssignmentSubmitGetGradeRO>();
  onGradeChange(newGrade: AssignmentSubmitGetGradeRO) {
    this.gradeChange.emit(newGrade);
  }

  constructor(
    private toast: ToastrService,
    private _assignmentSubmitGradeService: AssignmentSubmitGradeService,
  ) {}

  submitGrade() {
    this._assignmentSubmitGradeService.store({ ...this.dto, assignmentSubmitId: this.submissionId }).subscribe(response => {
      this.toast.success('Chấm điểm thành công');
      this.onGradeChange(response);
    });
  }
}
