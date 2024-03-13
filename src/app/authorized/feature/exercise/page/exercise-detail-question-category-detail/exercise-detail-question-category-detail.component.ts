import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { QuestionService } from '@core/services/api/question.service';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-exercise-detail-question-category-detail',
  styleUrls: ['exercise-detail-question-category-detail.component.scss'],
  templateUrl: 'exercise-detail-question-category-detail.component.html',
})
export class ExerciseDetailQuestionCategoryDetailComponent implements OnInit {
  selectedQuestionIds: number[] = [];
  questionCategoryId: number;
  exerciseId: number;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _questionService: QuestionService,
    private _exerciseQuestionService: ExerciseQuestionService,
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.paramMap.get('id');
    this.questionCategoryId = +this.route.snapshot.paramMap.get('questionCategoryId');
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
      .subscribe(() => {
        this.toast.success('Chọn câu hỏi cho bài tập thành công');
        this.router.navigate(['/exercise', this.exerciseId]);
      });
  }
}
