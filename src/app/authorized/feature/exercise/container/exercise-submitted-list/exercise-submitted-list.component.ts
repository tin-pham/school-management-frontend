import { Component, Input } from '@angular/core';
import { StudentExerciseService } from '@core/services/api/student-exercise.service';
import { StudentExerciseGetListSubmittedDataRO } from '@shared/models/ro/student-exercise.ro';

@Component({
  selector: 'app-exercise-submitted-list',
  styleUrls: ['exercise-submitted-list.component.scss'],
  templateUrl: 'exercise-submitted-list.component.html',
})
export class ExerciseSubmittedListComponent {
  @Input() exerciseId: number;
  exercices: StudentExerciseGetListSubmittedDataRO[];

  constructor(private _studentExerciseService: StudentExerciseService) {}

  ngOnInit() {
    this.loadGrades();
  }

  loadGrades() {
    this._studentExerciseService.getSubmittedList({ exerciseId: this.exerciseId }).subscribe(res => {
      this.exercices = res.data;
    });
  }
}
