import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { QuestionService } from '@core/services/api/question.service';
import { IQuestionOptionStatus } from '@features/question/component/question-option/question-option.component';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { QuestionStoreDTO } from '@shared/models/dto/question.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-create',
  styleUrls: ['question-create.component.scss'],
  templateUrl: 'question-create.component.html',
})
export class QuestionCreateComponent {
  dto = new QuestionStoreDTO();
  IQuestionOptionStatus = IQuestionOptionStatus;
  difficulties: ISelectOption[] = [];

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _questionService: QuestionService,
    private _difficultyService: DifficultyService,
  ) {}

  ngOnInit() {
    this.dto.questionCategoryIds = [+this.route.snapshot.queryParamMap.get('questionCategoryId')];
    this.dto.options = [];
    this._difficultyService.getList().subscribe({
      next: response => {
        this.difficulties = response.data.map(difficulty => ({ label: difficulty.name, value: difficulty.id }));
      },
    });
  }

  store() {
    this._questionService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo câu hỏi thành công');
      window.history.back();
    });
  }
}
