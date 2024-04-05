import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
  @ViewChild('rotateIcon') rotateIcon: ElementRef;
  IQuestionOptionStatus = IQuestionOptionStatus;

  @Output() onRemoveClick = new EventEmitter();
  removeClick() {
    this.onRemoveClick.emit();
  }

  @Output() onToggleCorrect = new EventEmitter();
  toggleCorrect(event: MouseEvent) {
    this.rotateButton(event);
    if (this.status === IQuestionOptionStatus.CORRECT) {
      this.status = IQuestionOptionStatus.INCORRECT;
      this.onToggleCorrect.emit(false);
    } else {
      this.status = IQuestionOptionStatus.CORRECT;
      this.onToggleCorrect.emit(true);
    }
  }

  rotateButton(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.toggle('rotate'); // Add the 'rotate' class to start the animation
  }
}
