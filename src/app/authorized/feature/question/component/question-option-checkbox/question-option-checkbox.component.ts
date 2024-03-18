import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum IQuestionOptionStatus {
  NORMAL = 'normal',
  SELECTED = 'selected',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
}

@Component({
  selector: 'app-question-option-checkbox',
  styleUrls: ['question-option-checkbox.component.scss'],
  templateUrl: 'question-option-checkbox.component.html',
})
export class QuestionOptionCheckboxComponent {
  @Input() status?: IQuestionOptionStatus;
  @Input() name: string;
  @Input() label: string;
  @Input() showClose: boolean = true;
  @Input() disabled: boolean;

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter();
  onSelectedChange() {
    this.selectedChange.emit(this.selected);
  }

  IQuestionOptionStatus = IQuestionOptionStatus;

  @Output() onRemoveClick = new EventEmitter();
  removeClick() {
    this.onRemoveClick.emit();
  }

  checkboxClick($event) {
    if (this.disabled) {
      $event.preventDefault();
    }
  }
}
