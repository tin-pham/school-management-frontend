import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ExerciseQuestionSnapshotGetListOptionRO } from '@shared/models/ro/exercise-question-snapshot.ro';

export enum IQuestionOptionStatus {
  NORMAL = 'normal',
  SELECTED = 'selected',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
}

@Component({
  selector: 'app-question-option-radio',
  styleUrls: ['question-option-radio.component.scss'],
  templateUrl: 'question-option-radio.component.html',
})
export class QuestionOptionRadioComponent {
  @Input() name: string;
  @Input() questionId: number;
  @Input() label: string;
  @Input() showClose: boolean = true;
  @Input() disabled: boolean;
  @Input() options: ExerciseQuestionSnapshotGetListOptionRO[];
  status: IQuestionOptionStatus;

  @Output() valueChange = new EventEmitter<number>();
  onValueChange($event: MatRadioChange) {
    this.valueChange.emit($event.value);
  }

  IQuestionOptionStatus = IQuestionOptionStatus;

  @Output() onRemoveClick = new EventEmitter();
  removeClick() {
    this.onRemoveClick.emit();
  }

  radioClick($event) {
    if (this.disabled) {
      $event.preventDefault();
    }
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }

  getOptionStatus(option: ExerciseQuestionSnapshotGetListOptionRO) {
    if (option.isCorrect === undefined) {
      return;
    }
    if (!option.isCorrect && option.isChosen) {
      return IQuestionOptionStatus.INCORRECT;
    }

    if (option.isCorrect && option.isChosen) {
      return IQuestionOptionStatus.CORRECT;
    }

    if (option.isCorrect && !option.isChosen) {
      return IQuestionOptionStatus.CORRECT;
    }
  }
}
