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
  @Input() status?: IQuestionOptionStatus;
  @Input() name: string;
  @Input() label: string;
  @Input() showClose = true;
  @Input() showCorrect = true;
  @Input() showTrash = true;
  @Input() isMultipleChoice: boolean;
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

  @Output() onCorrectClick = new EventEmitter();
  correctClick() {
    this.status = IQuestionOptionStatus.CORRECT;
    this.onCorrectClick.emit();
  }

  @Output() onUncorrectClick = new EventEmitter();
  uncorrectClick() {
    this.status = IQuestionOptionStatus.INCORRECT;
    this.onUncorrectClick.emit();
  }

  checkboxClick($event) {
    if (this.disabled) {
      $event.preventDefault();
    }
  }

  radioClick($event) {
    if (this.disabled) {
      $event.preventDefault();
    }
  }
}
