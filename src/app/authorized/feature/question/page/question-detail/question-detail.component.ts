import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionService } from '@core/services/api/question.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { QuestionUpdateDTO } from '@shared/models/dto/question.dto';

@Component({
  selector: 'app-question-detail',
  styleUrls: ['question-detail.component.scss'],
  templateUrl: 'question-detail.component.html',
})
export class QuestionDetailComponent implements OnInit {
  dto = new QuestionUpdateDTO();
  id: number;
  difficulties: ISelectOption[];

  constructor(
    private route: ActivatedRoute,
    private _difficultyService: DifficultyService,
    private _questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this._difficultyService.getList().subscribe({
      next: response => {
        this.difficulties = response.data.map(d => ({ label: d.name, value: d.id }));
      },
    });
    this._questionService.getDetail(this.id).subscribe({
      next: response => {
        this.dto = response;
      },
    });
  }
}
