import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionGetListDTO } from '@shared/models/dto/question.dto';
import { QuestionCategoryGetDetailRO } from '@shared/models/ro/question-category.ro';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-detail',
  styleUrls: ['question-category-detail.component.scss'],
  templateUrl: 'question-category-detail.component.html',
})
export class QuestionCategoryDetailComponent implements OnInit {
  questionCategory: QuestionCategoryGetDetailRO;
  questionCategoryId: number;
  questions: QuestionGetListDataRO[];

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    private _questionCategoryService: QuestionCategoryService,
    private _questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.questionCategoryId = this.route.snapshot.params['questionCategoryId'];
    this._questionCategoryService.getDetail(this.questionCategoryId).subscribe({
      next: response => {
        this.questionCategory = response;
        this.loadQuestions({
          questionCategoryId: this.questionCategoryId,
          limit: this.itemsPerPage,
          page: this.page,
        });
      },
    });
  }

  loadQuestions(dto: QuestionGetListDTO) {
    this._questionService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.questions = response.data;
      this.cd.markForCheck();
    });
  }

  handlePageChange() {
    this.loadQuestions({
      questionCategoryId: this.questionCategoryId,
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  deleteQuestion(id: number) {
    this._questionService.delete(id).subscribe(() => {
      this.toast.success('Xóa câu hỏi thành công');
      this.loadQuestions({
        questionCategoryId: this.questionCategoryId,
        limit: this.itemsPerPage,
        page: this.page,
      });
    });
  }

  routeToQuestion(id: number) {
    this.router.navigate(['/question', id]);
  }
}
