import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionService } from '@core/services/api/question.service';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { QuestionCategoryGetDetailRO } from '@shared/models/ro/question-category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-exercise-detail-question-category-detail',
  styleUrls: ['exercise-detail-question-category-detail.component.scss'],
  templateUrl: 'exercise-detail-question-category-detail.component.html',
})
export class ExerciseDetailQuestionCategoryDetailComponent implements OnInit {
  selectedQuestionIds: number[] = [];
  questionCategoryId: number;
  questionCategory: QuestionCategoryGetDetailRO;
  exerciseId: number;
  exercise: ExerciseGetDetailRO;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _questionService: QuestionService,
    private _exerciseQuestionService: ExerciseQuestionService,
    private _questionCategoryService: QuestionCategoryService,
    private _exerciseService: ExerciseService,
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.paramMap.get('id');
    this.questionCategoryId = +this.route.snapshot.paramMap.get('questionCategoryId');
    this._questionCategoryService.getDetail(this.questionCategoryId).subscribe(response => {
      this.questionCategory = response;
    });
    this._exerciseService.getDetail(this.exerciseId).subscribe(response => {
      this.exercise = response;
    });
  }

  routeToQuestion(questionId: number) {
    this.router.navigate(['/question', questionId]);
  }

  deleteQuestion(id: number) {
    this._questionService.delete(id).subscribe(() => {
      this.toast.success('Xóa câu hỏi thành công');
    });
  }

  chooseQuestions() {
    this._exerciseQuestionService
      .bulkStore({
        exerciseIds: [this.exerciseId],
        questionIds: this.selectedQuestionIds,
      })
      .pipe(
        switchMap(() => {
          if (this.exercise.isActive) {
            return this._exerciseService.sync(this.exerciseId);
          } else {
            return of(null);
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Chọn câu hỏi cho bài tập thành công');
        this.router.navigate(['/exercise', this.exerciseId]);
      });
  }
}
