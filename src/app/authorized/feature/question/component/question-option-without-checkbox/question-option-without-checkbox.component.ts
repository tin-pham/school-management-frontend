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
  @Input() isSelected: boolean;
  @Input() label: string;
  @Input() optionLabel: string;
  @Input() showAutorenew = true;
  @Input() showTrash = true;
  @Input() showIncorrect = true;
  IQuestionOptionStatus = IQuestionOptionStatus;

  @Output() onRemoveClick = new EventEmitter();
  removeClick() {
    this.onRemoveClick.emit();
  }

  @Output() onToggleCorrect = new EventEmitter();
  toggleCorrect() {
    this.rotateButton();
    if (this.status === IQuestionOptionStatus.CORRECT) {
      this.status = IQuestionOptionStatus.INCORRECT;
      this.onToggleCorrect.emit(false);
    } else {
      this.status = IQuestionOptionStatus.CORRECT;
      this.onToggleCorrect.emit(true);
    }
  }

  rotateButton() {
    const element = document.querySelector('.autorenew');
    element.classList.toggle('rotate'); // Add the 'rotate' class to start the animation
  }
}
