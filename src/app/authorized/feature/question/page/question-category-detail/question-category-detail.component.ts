import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionCategoryGetDetailRO } from '@shared/models/ro/question-category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-detail',
  styleUrls: ['question-category-detail.component.scss'],
  templateUrl: 'question-category-detail.component.html',
})
export class QuestionCategoryDetailComponent implements OnInit {
  selectedQuestionIds: number[] = [];
  questionCategoryId: number;
  questionCategory: QuestionCategoryGetDetailRO;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _questionService: QuestionService,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  ngOnInit() {
    this.questionCategoryId = Number(this.route.snapshot.paramMap.get('questionCategoryId'));
    this._questionCategoryService.getDetail(this.questionCategoryId).subscribe({
      next: response => {
        this.questionCategory = response;
      },
    });
  }

  deleteQuestion(id: number) {
    this._questionService.delete(id).subscribe(() => {
      this.toast.success('Xóa câu hỏi thành công');
    });
  }

  routeToQuestion(id: number) {
    this.router.navigate(['/question', id]);
  }
}
