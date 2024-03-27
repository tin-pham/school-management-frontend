import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestionOptionStatus } from '@features/question/component/question-option/question-option.component';
import { QuestionOptionStoreDTO, QuestionOptionUpdateDTO } from '@shared/models/dto/question-option.dto';
import { QuestionUpdateOptionRO } from '@shared/models/dto/question.dto';
import { QuestionGetDetailOptionRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-question-option-update',
  styleUrls: ['question-option-update.component.scss'],
  templateUrl: 'question-option-update.component.html',
})
export class QuestionOptionUpdateComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() icon: string;
  @Input() options: QuestionGetDetailOptionRO[] = [];
  @Output() optionsChange = new EventEmitter<QuestionGetDetailOptionRO[]>();

  @Input() createOptions: QuestionUpdateOptionRO[] = [];
  @Output() createOptionsChange = new EventEmitter<QuestionUpdateOptionRO[]>();

  option = new QuestionOptionStoreDTO();
  IQuestionOptionStatus = IQuestionOptionStatus;
  createShow = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.option.questionId = +this.route.snapshot.paramMap.get('id');
    this.option.isCorrect = false;
  }

  createOption() {
    if (this.option.text.trim() === '') return;
    this.options.push(this.option);
    this.createOptions.push(this.option);
    this.option = new QuestionOptionStoreDTO();
    this.optionsChange.emit(this.options); // Emit the updated options array
    this.createOptionsChange.emit(this.createOptions);
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
  }

  @Input() removeOptionIds: number[];
  @Output() removeOptionIdsChange = new EventEmitter<number[]>();
  removeOption(index: number) {
    if (this.options[index].id) {
      this.removeOptionIds.push(this.options[index].id);
    } else {
      this.createOptions = this.createOptions.filter(option => option.text !== this.options[index].text);
      this.createOptionsChange.emit(this.createOptions);
    }
    this.options.splice(index, 1);
    this.removeOptionIdsChange.emit(this.removeOptionIds);
    this.optionsChange.emit(this.options);
  }

  @Input() updateOptions: { id: number; dto: QuestionOptionUpdateDTO }[] = [];
  @Output() updateOptionsChange = new EventEmitter();
  correctOption(index: number) {
    this.options[index].isCorrect = true;
    if (!this.updateOptions[index]) {
      this.updateOptions.push({
        id: this.options[index].id,
        dto: { isCorrect: true },
      });
    } else {
      this.updateOptions[index].dto.isCorrect = true;
    }
    this.updateOptionsChange.emit(this.updateOptions);
  }

  incorrectOption(index: number) {
    this.options[index].isCorrect = false;
    if (!this.updateOptions[index]) {
      this.updateOptions.push({
        id: this.options[index].id,
        dto: { isCorrect: false },
      });
    } else {
      this.updateOptions[index].dto.isCorrect = false;
    }
    this.updateOptionsChange.emit(this.updateOptions);
  }
}
