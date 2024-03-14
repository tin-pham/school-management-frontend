import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionGetListDTO } from '@shared/models/dto/question.dto';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-question-list',
  styleUrls: ['question-list.component.scss'],
  templateUrl: 'question-list.component.html',
})
export class QuestionListComponent {
  questions: QuestionGetListDataRO[];
  dto: QuestionGetListDTO;

  @Input() questionCategoryId: number;
  @Input() exerciseId: number;
  @Input() excludeExerciseId: number;
  @Input() showTrash: boolean;

  @Input() selectedQuestionIds: number[];
  @Output() selectedQuestionIdsChange = new EventEmitter<number[]>();

  onSelectedQuestionIdsChange() {
    this.selectedQuestionIdsChange.emit(this.selectedQuestionIds);
  }

  @Input() showCheckBox = false;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private _questionService: QuestionService,
  ) {}

  ngOnInit() {
    const dto = this.getDto();
    this.loadQuestions(dto);
  }

  loadQuestions(dto: QuestionGetListDTO) {
    this._questionService.getList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.questions = response.data;
      this.cd.markForCheck();
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;

    const dto = this.getDto();
    this.loadQuestions(dto);
  }

  @Output() onDelete = new EventEmitter();
  delete(questionId: number) {
    this.onDelete.emit(questionId);
    const dto = this.getDto();
    this.loadQuestions(dto);
  }

  @Output() onEdit = new EventEmitter();
  edit(questionId: number) {
    this.onEdit.emit(questionId);
  }

  checkBoxChecked(checked: boolean, questionId: number) {
    if (checked) {
      this.selectedQuestionIds.push(questionId);
    } else {
      const index = this.selectedQuestionIds.indexOf(questionId);
      if (index > -1) {
        this.selectedQuestionIds.splice(index, 1);
      }
    }
    this.onSelectedQuestionIdsChange();
  }

  @Output() onSelectClicked = new EventEmitter();
  selectClicked() {
    this.onSelectClicked.emit(this.selectedQuestionIds);
  }

  getDto() {
    const dto = new QuestionGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
    });

    if (this.questionCategoryId) {
      dto.questionCategoryId = this.questionCategoryId;
    } else if (this.exerciseId) {
      dto.exerciseId = this.exerciseId;
    }

    if (this.excludeExerciseId) {
      dto.excludeExerciseId = this.excludeExerciseId;
    }

    return dto;
  }
}
