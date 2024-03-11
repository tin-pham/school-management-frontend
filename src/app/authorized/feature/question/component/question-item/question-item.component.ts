import { Component, Input } from '@angular/core';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';
import { IQuestionOptionStatus } from '../question-option/question-option.component';

@Component({
  selector: 'app-question-item',
  styleUrls: ['question-item.component.scss'],
  templateUrl: 'question-item.component.html',
})
export class QuestionItemComponent {
  @Input() question: QuestionGetListDataRO;

  IQuestionOptionStatus = IQuestionOptionStatus;
}
