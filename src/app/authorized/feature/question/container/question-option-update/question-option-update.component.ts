import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestionOptionStatus } from '@features/question/component/question-option/question-option.component';
import { QuestionOptionStoreDTO } from '@shared/models/dto/question-option.dto';
import { QuestionUpdateOptionCreateDTO, QuestionUpdateOptionUpdateDataDTO } from '@shared/models/dto/question.dto';
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

  @Input() createOptions: QuestionUpdateOptionCreateDTO[] = [];
  @Output() createOptionsChange = new EventEmitter<QuestionUpdateOptionCreateDTO[]>();

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

  @Input() updateOptions: Map<number, QuestionUpdateOptionUpdateDataDTO>;
  @Output() updateOptionsChange = new EventEmitter();

  toggleCorrectOption(index: number, isCorrect: boolean, optionId: number) {
    // Check if the option is in the createOptions array
    const createdOptionIndex = this.createOptions.findIndex(option => option.text === this.options[index].text);
    if (createdOptionIndex !== -1) {
      // Update isCorrect in the createOptions array
      this.createOptions[createdOptionIndex].isCorrect = isCorrect;
      this.createOptionsChange.emit(this.createOptions);
    } else if (optionId) {
      // For existing options, add or update in the updateOptions Map
      const updateOption = this.updateOptions.get(optionId) || {};
      updateOption.isCorrect = isCorrect;
      this.updateOptions.set(optionId, updateOption);
    } else {
      // If the option is not in createOptions and doesn't have an id, it's a new option that hasn't been added yet
      // Directly update its isCorrect property
      this.options[index].isCorrect = isCorrect;
      this.optionsChange.emit(this.options);
    }

    // Emit the changes for updateOptions as well
    this.updateOptionsChange.emit(this.updateOptions);
  }
}
