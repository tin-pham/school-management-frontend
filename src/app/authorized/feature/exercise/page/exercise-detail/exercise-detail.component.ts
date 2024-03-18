import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@core/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '@core/services/api/auth.service';
import { ExerciseQuestionService } from '@core/services/api/exercise-question.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { StudentExerciseGradeService } from '@core/services/api/student-exercise-grade.service';
import { StudentExerciseService } from '@core/services/api/student-exercise.service';
import { ExerciseDetailHeaderComponent } from '@features/exercise/container/exercise-detail-header/exercise-detail-header.component';
import { QuestionListComponent } from '@features/question/container/question-list/question-list.component';
import { StudentQuestionListComponent } from '@features/question/container/student-question-list/student-question-list.component';
import { ExerciseGetDetailDTO, ExerciseUpdateDTO } from '@shared/models/dto/exercise.dto';
import { StudentExerciseSubmitDTO } from '@shared/models/dto/student-exercise.dto';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { tap } from 'rxjs';

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
  @ViewChild('exerciseDetailHeader') exerciseDetailHeader: ExerciseDetailHeaderComponent;
  @ViewChild('studentQuestionList') studentQuestionList: StudentQuestionListComponent;
  totalItems = 0;

  studentExerciseSubmitDTO: StudentExerciseSubmitDTO = {
    snapshotQuestions: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog,
    private _exerciseService: ExerciseService,
    private _exerciseQuestionService: ExerciseQuestionService,
    private _studentExerciseService: StudentExerciseService,
    private _studentExerciseGradeService: StudentExerciseGradeService,
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
    this._exerciseService.activate(this.exerciseId).subscribe(() => {
      this.toast.success('Kích hoạt thành công');
      this.exercise.isActive = true;
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

      this._studentExerciseService.submit(this.exercise.studentExerciseId, this.studentExerciseSubmitDTO).subscribe(() => {
        this.toast.success('Đã nộp bài');
        this.exerciseDetailHeader.stopCountdown();
        this.studentQuestionList.loadQuestions(this.studentQuestionList.getDto());
      });
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

      this._studentExerciseService
        .store({
          exerciseId: this.exerciseId,
        })
        .pipe(
          tap(() => {
            if (this.exercise.instantMark) {
              this._studentExerciseGradeService
                .calculate({
                  studentExerciseId: this.exercise.studentExerciseId,
                  basePoint: 100,
                })
                .subscribe(response => {
                  this.exercise.point = response.point;
                  this.exercise.totalCount = response.totalCount;
                  this.exercise.correctCount = response.correctCount;
                });
            }
          }),
        )
        .subscribe(response => {
          this.toast.success('Bắt đầu làm bài.');
          this.exercise.studentExerciseId = response.id;
          this.exercise.isStartDoing = true;
          this.exerciseDetailHeader.startCountdown();
        });
    });
  }
}
