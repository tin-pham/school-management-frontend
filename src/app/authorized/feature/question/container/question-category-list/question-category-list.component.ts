import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryGetListDTO } from '@shared/models/dto/question-category.dto';
import { QuestionCategoryGetListDataRO, QuestionCategoryGetListRO } from '@shared/models/ro/question-category.ro';

@Component({
  selector: 'app-question-category-list',
  styleUrls: ['question-category-list.component.scss'],
  templateUrl: 'question-category-list.component.html',
})
export class QuestionCategoryListComponent {
  questionCategories: QuestionCategoryGetListDataRO[];
  @Input() excludeExerciseId: number;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  ngOnInit() {
    const dto = new QuestionCategoryGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
    });

    if (this.excludeExerciseId) {
      dto.excludeByExerciseId = this.excludeExerciseId;
    }

    this.loadQuestionCategories(dto);
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;

    const dto = new QuestionCategoryGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
    });

    if (this.excludeExerciseId) {
      dto.excludeByExerciseId = this.excludeExerciseId;
    }
    this.loadQuestionCategories(dto);
  }

  loadQuestionCategories(dto: QuestionCategoryGetListDTO) {
    this._questionCategoryService.getList(dto).subscribe({
      next: (response: QuestionCategoryGetListRO) => {
        this.totalItems = response.meta.totalItems;
        this.questionCategories = response.data;
        this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
      },
    });
  }

  delete(id: number) {
    this._questionCategoryService.delete(id).subscribe({
      next: () => {
        const dto = new QuestionCategoryGetListDTO({
          limit: this.itemsPerPage,
          page: this.page,
        });

        if (this.excludeExerciseId) {
          dto.excludeByExerciseId = this.excludeExerciseId;
        }
        this.loadQuestionCategories(dto);
      },
    });
  }

  @Output() onQuestionCategoryItemClicked = new EventEmitter<number>();
  questionCategoryItemClicked(questionCategoryId: number) {
    this.onQuestionCategoryItemClicked.emit(questionCategoryId);
  }
}
