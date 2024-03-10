import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum IQuestionOptionStatus {
  NORMAL = 'normal',
  SELECTED = 'selected',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
}

@Component({
  selector: 'app-question-option',
  styleUrls: ['question-option.component.scss'],
  templateUrl: 'question-option.component.html',
})
export class QuestionOptionComponent {
  @Input() status: IQuestionOptionStatus;
  @Input() name: string;
  @Input() label: string;

  @Input() value: string;
  @Output() valueChange = new EventEmitter();
  onValueChange() {
    this.valueChange.emit();
  }

  IQuestionOptionStatus = IQuestionOptionStatus;
}
