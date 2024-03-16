import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionListComponent } from '@features/question/container/question-list/question-list.component';
import { ExerciseGetDetailDTO, ExerciseUpdateDTO } from '@shared/models/dto/exercise.dto';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-exercise-detail',
  styleUrls: ['exercise-detail.component.scss'],
  templateUrl: 'exercise-detail.component.html',
})
export class ExerciseDetailComponent implements OnInit {
  exercise: ExerciseGetDetailRO;
  exerciseId: number;
  selectedQuestionIds: number[] = [];
  showTrash = false;
  @ViewChild('questionList') questionListComponent: QuestionListComponent;
  totalItems = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog,
    private _exerciseService: ExerciseService,
    private _exerciseQuestionService: ExerciseQuestionService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.paramMap.get('id');
    const dto = new ExerciseGetDetailDTO();
    if (this.isStudent()) {
      dto.includeGrade = true;
    }
    this._exerciseService.getDetail(this.exerciseId, dto).subscribe((response: ExerciseGetDetailRO) => {
      this.exercise = response;
    });
  }

  activateExercise() {
    const dto = new ExerciseUpdateDTO();
    dto.isActive = true;
    this._exerciseService.update(this.exerciseId, dto).subscribe(() => {
      this.toast.success('Kích hoạt thành công');
    });
  }

  routeToQuestion(questionId: number) {
    this.router.navigate(['/question', questionId]);
  }

  removeQuestionsFromExercise() {
    this._exerciseQuestionService
      .bulkDelete({
        exerciseIds: [this.exerciseId],
        questionIds: this.selectedQuestionIds,
      })
      .subscribe(() => {
        this.toast.success('Xóa thành công khỏi bài tập này');
        this.selectedQuestionIds = [];
        this.questionListComponent.loadQuestions(this.questionListComponent.getDto());
      });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  submitExercise() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Xác nhận nộp bài');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      // submit
    });
  }

  storeStudentExercise() {
    const dialogData = new ConfirmDialogModel('Xác nhận', 'Bắt đầu làm bài?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      // start
    });
  }

  isStartDoing() {
    return this.exercise.studentId && this.exercise.studentExerciseId;
  }

  isSubmitted() {
    return this.exercise.isSubmitted;
  }
}
