import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionOptionService } from '@core/services/api/question-option.service';
import { QuestionService } from '@core/services/api/question.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { QuestionOptionUpdateDTO } from '@shared/models/dto/question-option.dto';
import { QuestionUpdateDTO } from '@shared/models/dto/question.dto';
import { QuestionGetDetailRO } from '@shared/models/ro/question.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap, tap } from 'rxjs';

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
  updateOptions: { id: number; dto: QuestionOptionUpdateDTO }[] = [];

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _difficultyService: DifficultyService,
    private _questionService: QuestionService,
    private _questionOptionService: QuestionOptionService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dto.removeOptionIds = [];
    this.dto.options = [];
    this.loadDifficulties();
    this.loadQuestion(this.id);
  }

  update() {
    this._questionService
      .update(this.id, this.dto)
      .pipe(
        switchMap(() => {
          if (this.updateOptions.length > 0) {
            return this._questionOptionService.bulkUpdate({ data: this.updateOptions });
          }
          return of(null);
        }),
        tap(() => {
          this.toast.success('Cập nhật câu hỏi thành công');
          window.history.back();
        }),
      )
      .subscribe();
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
      this.updateOptions = this.question?.options.map(o => ({ id: o.id, dto: o }));
    });
  }

  restore() {
    this.loadQuestion(this.id);
  }
}
