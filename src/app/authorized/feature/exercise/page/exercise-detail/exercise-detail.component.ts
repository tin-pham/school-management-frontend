import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';

@Component({
  selector: 'app-exercise-detail',
  styleUrls: ['exercise-detail.component.scss'],
  templateUrl: 'exercise-detail.component.html',
})
export class ExerciseDetailComponent implements OnInit {
  exercise: ExerciseGetDetailRO;
  exerciseId: number;

  constructor(
    private route: ActivatedRoute,
    private _exerciseService: ExerciseService,
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.paramMap.get('id');
    this._exerciseService.getDetail(this.exerciseId).subscribe((response: ExerciseGetDetailRO) => {
      this.exercise = response;
    });
  }
}
