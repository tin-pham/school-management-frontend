import { Component, EventEmitter, Output } from '@angular/core';
import { AssignmentSubmitGradeStoreDTO } from '@shared/models/dto/aassignment-submit-grade.dto';

@Component({
  selector: 'app-assignment-submit-grade-form',
  styleUrls: ['./assignment-submit-grade-form.component.scss'],
  templateUrl: './assignment-submit-grade-form.component.html',
})
export class AssignmentSubmitGradeFormComponent {
  dto = new AssignmentSubmitGradeStoreDTO();

  @Output() onGradeClick = new EventEmitter();
  gradeClick() {
    this.onGradeClick.emit(this.dto);
  }
}
