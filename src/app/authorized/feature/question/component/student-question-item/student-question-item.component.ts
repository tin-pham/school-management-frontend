import { Component, Input } from '@angular/core';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';
import { IQuestionOptionStatus } from '../question-option/question-option.component';

@Component({
  selector: 'app-student-question-item',
  styleUrls: ['student-question-item.component.scss'],
  templateUrl: 'student-question-item.component.html',
})
export class StudentQuestionItemComponent {
  @Input() question: QuestionGetListDataRO;

  IQuestionOptionStatus = IQuestionOptionStatus;

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
