import { Component, Input } from '@angular/core';
import {
  ExerciseQuestionSnapshotGetListDataRO,
  ExerciseQuestionSnapshotGetListOptionRO,
} from '@shared/models/ro/exercise-question-snapshot.ro';
import { IQuestionOptionStatus } from '../question-option/question-option.component';

@Component({
  selector: 'app-student-question-item',
  styleUrls: ['student-question-item.component.scss'],
  templateUrl: 'student-question-item.component.html',
})
export class StudentQuestionItemComponent {
  @Input() question: ExerciseQuestionSnapshotGetListDataRO;

  IQuestionOptionStatus = IQuestionOptionStatus;

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
  }
}
