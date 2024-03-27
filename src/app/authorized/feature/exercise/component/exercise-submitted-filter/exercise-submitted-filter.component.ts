import { Component, Input } from '@angular/core';
import { StudentExerciseGetListSubmittedDataRO } from '@shared/models/ro/student-exercise.ro';

@Component({
  selector: 'app-exercise-submitted-item',
  styleUrls: ['exercise-submitted-item.component.scss'],
  templateUrl: 'exercise-submitted-item.component.html',
})
export class ExerciseSubmittedItemComponent {
  @Input() exercise: StudentExerciseGetListSubmittedDataRO;
}
