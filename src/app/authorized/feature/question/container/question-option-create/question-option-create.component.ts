import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestionOptionStatus } from '@features/question/component/question-option/question-option.component';
import { QuestionStoreOptionDTO } from '@shared/models/dto/question.dto';

@Component({
  selector: 'app-question-option-create',
  styleUrls: ['question-option-create.component.scss'],
  templateUrl: 'question-option-create.component.html',
})
export class QuestionOptionCreateComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() options: QuestionStoreOptionDTO[] = [];
  @Output() optionsChange = new EventEmitter<QuestionStoreOptionDTO[]>();

  option = new QuestionStoreOptionDTO();
  createShow = false;
  IQuestionOptionStatus = IQuestionOptionStatus;

  createOption() {
    this.option.text = this.option.text.trim();
    this.options.push(this.option);
    this.option = new QuestionStoreOptionDTO();
    this.optionsChange.emit(this.options); // Emit the updated options array
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }
}
