import { Component, Input } from '@angular/core';
import { StudentExerciseGetListSubmittedDataRO } from '@shared/models/ro/student-exercise.ro';
import { getGravatarUrl } from '@shared/util/random-avatar';

@Component({
  selector: 'app-exercise-submitted-item',
  styleUrls: ['exercise-submitted-item.component.scss'],
  templateUrl: 'exercise-submitted-item.component.html',
})
export class ExerciseSubmittedItemComponent {
  @Input() exercise: StudentExerciseGetListSubmittedDataRO;

  getAvatarUrl() {
    return this.exercise?.userImageUrl || getGravatarUrl(this.exercise?.userId, this.exercise?.username);
  }
}
