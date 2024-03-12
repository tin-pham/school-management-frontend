import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionService } from '@core/services/api/question.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { QuestionUpdateDTO } from '@shared/models/dto/question.dto';
import { QuestionGetDetailRO } from '@shared/models/ro/question.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

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

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _difficultyService: DifficultyService,
    private _questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dto.removeOptionIds = [];
    this.dto.options = [];
    this._difficultyService.getList().subscribe({
      next: response => {
        this.difficulties = response.data.map(d => ({ label: d.name, value: d.id }));
      },
    });
    this._questionService.getDetail(this.id).subscribe(response => {
      this.question = response;
      this.dto.text = response.text;
      this.dto.difficultyId = response.difficultyId;
    });
  }

  update() {
    console.log(this.dto);
    this._questionService.update(this.id, this.dto).subscribe(() => {
      this.toast.success('Cập nhật câu hỏi thành công');
      window.history.back();
    });
  }
}
