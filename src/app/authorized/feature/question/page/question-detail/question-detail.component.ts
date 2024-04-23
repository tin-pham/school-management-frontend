import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { QuestionService } from '@core/services/api/question.service';
import { StudentExerciseGradeService } from '@core/services/api/student-exercise-grade.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { QuestionUpdateDTO, QuestionUpdateOptionUpdateDataDTO } from '@shared/models/dto/question.dto';
import { QuestionGetDetailRO } from '@shared/models/ro/question.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-question-detail',
  styleUrls: ['question-detail.component.scss'],
  templateUrl: 'question-detail.component.html',
})
export class QuestionDetailComponent implements OnInit {
  question: QuestionGetDetailRO;
  dto = new QuestionUpdateDTO();
  id: number;
  difficulties: ISelectOption[];
  updateOptions: Map<number, QuestionUpdateOptionUpdateDataDTO> = new Map();
  exerciseId: number;

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _difficultyService: DifficultyService,
    private _questionService: QuestionService,
    private _exerciseService: ExerciseService,
    private _studentExerciseGradeService: StudentExerciseGradeService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.exerciseId = +this.route.snapshot.queryParamMap.get('exerciseId');
    this.reset();
    this.loadDifficulties();
    this.loadQuestion(this.id);
  }

  update() {
    for (const [optionId, option] of this.updateOptions.entries()) {
      const updateOption = {
        id: optionId,
        data: option,
      };
      this.dto.updateOptions.push(updateOption);
    }
    this._questionService
      .update(this.id, this.dto)
      .pipe(
        switchMap(() => {
          if (this.exerciseId) {
            return this._exerciseService.sync(this.exerciseId);
          } else {
            return of(null);
          }
        }),
        switchMap(response => {
          if (response?.result) {
            return this._studentExerciseGradeService.bulkCalculate({
              exerciseId: this.exerciseId,
              basePoint: 100,
            });
          } else {
            return of(null);
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Cập nhật câu hỏi thành công');
        window.history.back();
      });
  }

  loadDifficulties() {
    this._difficultyService.getList().subscribe(response => {
      this.difficulties = response.data.map(d => ({ label: d.name, value: d.id }));
    });
  }

  loadQuestion(id: number) {
    this._questionService.getDetail(id).subscribe(response => {
      this.question = response;
      this.dto.text = response.text;
      this.dto.difficultyId = response.difficultyId;
      this.reset();
    });
  }

  restore() {
    this.loadQuestion(this.id);
  }

  reset() {
    this.dto.removeOptionIds = [];
    this.dto.createOptions = [];
    this.dto.updateOptions = [];
    this.updateOptions = new Map();
  }
}
