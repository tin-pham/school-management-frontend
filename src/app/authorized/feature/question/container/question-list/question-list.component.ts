import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { ExerciseQuestionSnapshotService } from '@core/services/api/exercise-question-snapshot.service';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionGetListDTO } from '@shared/models/dto/question.dto';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-question-list',
  styleUrls: ['question-list.component.scss'],
  templateUrl: 'question-list.component.html',
})
export class QuestionListComponent extends PaginateComponent {
  questions: QuestionGetListDataRO[];
  dto: QuestionGetListDTO;

  @Input() questionCategoryId: number;
  @Input() exerciseId: number;
  @Input() excludeExerciseId: number;
  @Input() isActive: boolean;
  @Input() inExercise: boolean;

  @Input() showSearchBar = true;
  @Input() showTrash = true;
  @Input() showEdit = true;
  @Input() showDifficulty = true;
  @Input() showDifficultyFilter = true;

  @Input() selectedQuestionIds: number[];
  @Output() selectedQuestionIdsChange = new EventEmitter<number[]>();

  onSelectedQuestionIdsChange() {
    this.selectedQuestionIdsChange.emit(this.selectedQuestionIds);
  }

  @Input() showCheckBox = false;

  itemsPerPage = 5;
  page = 1;
  @Input() totalItems = 0;
  @Output() totalItemsChange = new EventEmitter();

  onTotalITemsChange(totalItems: number) {
    this.totalItemsChange.emit(totalItems);
  }

  constructor(
    private cd: ChangeDetectorRef,
    private _questionService: QuestionService,
    private _exerciseQuestionSnapshotService: ExerciseQuestionSnapshotService,
  ) {
    super();
  }

  loadData(dto: QuestionGetListDTO) {
    if (this.isActive) {
      this._exerciseQuestionSnapshotService.getList(dto).subscribe(response => {
        this.totalItems = response.meta.totalItems;
        this.totalItemsChange.emit(this.totalItems);
        this.questions = response.data;
        this.cd.markForCheck();
      });
    } else {
      this._questionService.getList(dto).subscribe(response => {
        this.totalItems = response.meta.totalItems;
        this.totalItemsChange.emit(this.totalItems);
        this.questions = response.data;
        this.cd.markForCheck();
      });
    }
  }

  @Output() onDelete = new EventEmitter();
  delete(questionId: number) {
    this.onDelete.emit(questionId);
    const dto = this.getDto();
    this.loadData(dto);
  }

  @Output() onEdit = new EventEmitter();
  edit(questionId: number) {
    this.onEdit.emit(questionId);
  }

  getSelected(questionId: number) {
    return this.selectedQuestionIds.includes(questionId);
  }

  checkBoxChecked(checked: boolean, questionId: number) {
    console.log(this.selectedQuestionIds);
    console.log(checked);
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
      search: this.search$.value,
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

  applyFilter(dto: QuestionGetListDTO) {
    this.page = 1;
    this.loadData({
      ...this.getDto(),
      ...dto,
    });
  }
}
