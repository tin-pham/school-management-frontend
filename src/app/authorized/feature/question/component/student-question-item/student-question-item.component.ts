import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ExerciseQuestionSnapshotGetListDataRO,
  ExerciseQuestionSnapshotGetListOptionRO,
} from '@shared/models/ro/exercise-question-snapshot.ro';
import { StudentExerciseSubmitSnapshotQuestionDTO } from '@shared/models/dto/student-exercise.dto';
import { IQuestionOptionStatus } from '../question-option/question-option.component';

@Component({
  selector: 'app-student-question-item',
  styleUrls: ['student-question-item.component.scss'],
  templateUrl: 'student-question-item.component.html',
})
export class StudentQuestionItemComponent {
  @Input() question: ExerciseQuestionSnapshotGetListDataRO;
  @Input() questionNumber: number;
  @Input() isSubmitted = false;

  @Input() snapshotQuestion: StudentExerciseSubmitSnapshotQuestionDTO;
  @Output() snapshotQuestionChange = new EventEmitter<StudentExerciseSubmitSnapshotQuestionDTO>();

  onSnapshotQuestionChange() {
    this.snapshotQuestionChange.emit(this.snapshotQuestion);
  }

  IQuestionOptionStatus = IQuestionOptionStatus;

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }

  getOptionStatus(option: ExerciseQuestionSnapshotGetListOptionRO) {
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

  onOptionChange(optionId: number, isChecked: boolean) {
    // Checkbox logic
    if (isChecked) {
      if (!this.snapshotQuestion.snapshotOptionIds.includes(optionId)) {
        this.snapshotQuestion.snapshotOptionIds.push(optionId);
      }
    } else {
      this.snapshotQuestion.snapshotOptionIds = this.snapshotQuestion.snapshotOptionIds.filter(id => id !== optionId);
    }
    this.onSnapshotQuestionChange();
  }

  onRadioChange(optionId: number) {
    this.snapshotQuestion.snapshotOptionIds = [optionId];
    this.onSnapshotQuestionChange();
  }
}
