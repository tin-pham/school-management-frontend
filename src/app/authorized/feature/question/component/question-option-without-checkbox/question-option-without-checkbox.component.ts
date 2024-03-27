import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum IQuestionOptionStatus {
  NORMAL = 'normal',
  SELECTED = 'selected',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
}

@Component({
  selector: 'app-question-option-without-checkbox',
  styleUrls: ['question-option-without-checkbox.component.scss'],
  templateUrl: 'question-option-without-checkbox.component.html',
})
export class QuestionOptionWithoutCheckboxComponent {
  @Input() status?: IQuestionOptionStatus;
  @Input() label: string;
  IQuestionOptionStatus = IQuestionOptionStatus;

  @Output() onRemoveClick = new EventEmitter();
  removeClick() {
    this.onRemoveClick.emit();
  }

  @Output() onToggleCorrect = new EventEmitter();
  toggleCorrect() {
    if (this.status === IQuestionOptionStatus.CORRECT) {
      this.status = IQuestionOptionStatus.INCORRECT;
    } else {
      this.status = IQuestionOptionStatus.CORRECT;
    }

    this.onToggleCorrect.emit();
  }
}
