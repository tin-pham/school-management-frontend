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
import { ExerciseSubmittedListComponent } from '@features/exercise/container/exercise-submitted-list/exercise-submitted-list.component';
import { QuestionListComponent } from '@features/question/container/question-list/question-list.component';
import { StudentQuestionListComponent } from '@features/question/container/student-question-list/student-question-list.component';
import { ExerciseGetDetailDTO, ExerciseUpdateDTO } from '@shared/models/dto/exercise.dto';
import { StudentExerciseSubmitDTO } from '@shared/models/dto/student-exercise.dto';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap, tap } from 'rxjs';

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
  dto = new ExerciseGetDetailDTO();
  @ViewChild('exerciseDetailHeader') exerciseDetailHeader: ExerciseDetailHeaderComponent;
  @ViewChild('questionList') questionListComponent: QuestionListComponent;
  @ViewChild('studentQuestionList') studentQuestionList: StudentQuestionListComponent;
  @ViewChild('exerciseSubmittedList') exerciseSubmittedList: ExerciseSubmittedListComponent;
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
    this.dto.includeGrade = true;
    this.loadExercise(this.exerciseId, this.dto);
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
    if (this.exercise.isActive) {
      const dialogData = new ConfirmDialogModel('Xác nhận', 'Chỉnh sửa câu hỏi là sẽ chấm điểm lại?');

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData,
      });

      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          return;
        }

        this.router.navigate(['/question', questionId], { queryParams: { exerciseId: this.exerciseId } });
      });
    } else {
      this.router.navigate(['/question', questionId]);
    }
  }

  removeQuestionsFromExercise() {
    this._exerciseQuestionService
      .bulkDelete({
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
        this.toast.success('Xóa thành công khỏi bài tập này');
        this.selectedQuestionIds = [];
        this.questionListComponent.loadData(this.questionListComponent.getDto());
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

      this._studentExerciseService
        .submit(this.exercise.studentExerciseId, this.studentExerciseSubmitDTO)
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
                  this.exercise.isGraded = true;
                });
            }
          }),
        )
        .subscribe(() => {
          this.toast.success('Đã nộp bài');
          this.exerciseDetailHeader.stopCountdown();
          this.studentQuestionList.loadQuestions(this.studentQuestionList.getDto());
          this.exercise.isSubmitted = true;
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
        .subscribe(response => {
          this.toast.success('Bắt đầu làm bài.');
          this.exercise.studentExerciseId = response.id;
          this.exercise.isStartDoing = true;
          this.exercise.startDoingAt = response.startDoingAt;
          this.exerciseDetailHeader.startCountdown();
        });
    });
  }

  bulkGrade() {
    this._studentExerciseGradeService
      .bulkCalculate({
        exerciseId: this.exerciseId,
        basePoint: 100,
      })
      .subscribe(() => {
        this.toast.success('Chấm điểm thành công');
        this.exerciseSubmittedList.loadGrades();
      });
  }

  loadExercise(id: number, dto: ExerciseGetDetailDTO) {
    this._exerciseService.getDetail(id, dto).subscribe((response: ExerciseGetDetailRO) => {
      this.exercise = response;
    });
  }

  sync() {
    this._exerciseService.sync(this.exerciseId).subscribe(() => {
      this.questionListComponent.loadData(this.questionListComponent.getDto());
      this.toast.success('Đồng bộ thành công');
    });
  }

  redoExercise() {
    // delete student exercise
    this._studentExerciseService
      .delete(this.exercise.studentExerciseId)
      .pipe(
        switchMap(() => {
          // Start  doing
          return this._studentExerciseService.store({
            exerciseId: this.exerciseId,
          });
        }),
      )
      .subscribe(response => {
        this.exercise.studentExerciseId = response.id;
        this.exercise.isGraded = false;
        this.exercise.isSubmitted = false;
        delete this.exercise.point;
        this.exercise.startDoingAt = response.startDoingAt;
        this.exerciseDetailHeader.startCountdown();

        this.studentQuestionList.loadQuestions(this.studentQuestionList.getDto());
      });
  }
}
