import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionOptionService } from '@core/services/api/question-option.service';
import { IQuestionOptionStatus } from '@features/question/component/question-option/question-option.component';
import { QuestionOptionStoreDTO } from '@shared/models/dto/question-option.dto';
import { QuestionStoreOptionDTO } from '@shared/models/dto/question.dto';

@Component({
  selector: 'app-question-option-update',
  styleUrls: ['question-option-update.component.scss'],
  templateUrl: 'question-option-update.component.html',
})
export class QuestionOptionUpdateComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() options: QuestionStoreOptionDTO[] = [];
  @Output() optionsChange = new EventEmitter<QuestionStoreOptionDTO[]>();

  option = new QuestionOptionStoreDTO();
  IQuestionOptionStatus = IQuestionOptionStatus;

  constructor(
    private route: ActivatedRoute,
    private _questionOptionService: QuestionOptionService,
  ) {}

  ngOnInit() {
    this.option.questionId = +this.route.snapshot.paramMap.get('id');
  }

  createOption() {
    this._questionOptionService.store(this.option).subscribe();
    this.optionsChange.emit(this.options); // Emit the updated options array
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }

  deleteOption(index: number) {
    this._questionOptionService.delete(index).subscribe();
  }
}
