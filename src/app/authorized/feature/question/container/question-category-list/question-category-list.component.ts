import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginateComponent } from '@core/base/search.base';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryGetListDTO } from '@shared/models/dto/question-category.dto';
import { QuestionCategoryGetListDataRO, QuestionCategoryGetListRO } from '@shared/models/ro/question-category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-list',
  styleUrls: ['question-category-list.component.scss'],
  templateUrl: 'question-category-list.component.html',
})
export class QuestionCategoryListComponent extends PaginateComponent {
  questionCategories: QuestionCategoryGetListDataRO[];
  @Input() excludeExerciseId: number;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private toast: ToastrService,
    private _questionCategoryService: QuestionCategoryService,
  ) {
    super();
  }

  loadData(dto: QuestionCategoryGetListDTO) {
    this._questionCategoryService.getList(dto).subscribe({
      next: (response: QuestionCategoryGetListRO) => {
        this.totalItems = response.meta.totalItems;
        this.questionCategories = response.data;
        this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
      },
    });
  }

  delete(id: number) {
    this._questionCategoryService.delete(id).subscribe(() => {
      this.loadData(this.getDto());
      this.toast.success('Xóa thành công');
    });
  }

  getDto() {
    const dto = new QuestionCategoryGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
      search: this.search$.value,
    });

    if (this.excludeExerciseId) {
      dto.excludeByExerciseId = this.excludeExerciseId;
    }

    return dto;
  }

  @Output() onQuestionCategoryItemClicked = new EventEmitter<number>();
  questionCategoryItemClicked(questionCategoryId: number) {
    this.onQuestionCategoryItemClicked.emit(questionCategoryId);
  }
}
