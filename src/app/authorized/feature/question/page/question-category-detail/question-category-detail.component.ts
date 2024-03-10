import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryGetDetailRO } from '@shared/models/ro/question-category.ro';

@Component({
  selector: 'app-question-category-detail',
  styleUrls: ['question-category-detail.component.scss'],
  templateUrl: 'question-category-detail.component.html',
})
export class QuestionCategoryDetailComponent implements OnInit {
  questionCategory: QuestionCategoryGetDetailRO;
  questionCategoryId: number;

  constructor(
    private route: ActivatedRoute,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  ngOnInit() {
    this.questionCategoryId = this.route.snapshot.params['questionCategoryId'];
    this._questionCategoryService.getDetail(this.questionCategoryId).subscribe({
      next: response => {
        this.questionCategory = response;
      },
    });
  }
}
