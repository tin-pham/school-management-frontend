import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-home',
  styleUrls: ['question-home.component.scss'],
  templateUrl: 'question-home.component.html',
})
export class QuestionHomeComponent {
  constructor(private router: Router) {}

  routeToQuestionCategoryDetail(questionCategoryId: number) {
    this.router.navigate(['/question/question-category', questionCategoryId]);
  }
}
