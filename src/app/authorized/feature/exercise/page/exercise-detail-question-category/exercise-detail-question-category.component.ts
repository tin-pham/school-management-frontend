import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercise-detail-question-category',
  styleUrls: ['exercise-detail-question-category.component.scss'],
  templateUrl: 'exercise-detail-question-category.component.html',
})
export class ExerciseDetailQuestionCategoryComponent implements OnInit {
  exerciseId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.paramMap.get('id');
  }

  routeToQuestionCategoryDetail(questionCategoryId: number) {
    this.router.navigate([questionCategoryId], { relativeTo: this.route });
  }
}
