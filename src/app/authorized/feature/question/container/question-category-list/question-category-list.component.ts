import { ChangeDetectorRef, Component } from '@angular/core';
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

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  ngOnInit() {
    this.loadQuestionCategories({
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadQuestionCategories({
      limit: this.itemsPerPage,
      page: this.page,
    });
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
        this.loadQuestionCategories({
          limit: this.itemsPerPage,
          page: this.page,
        });
      },
    });
  }
}
