import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-question-list',
  styleUrls: ['question-list.component.scss'],
  templateUrl: 'question-list.component.html',
})
export class QuestionListComponent {
  @Input() questions: QuestionGetListDataRO[];

  @Input() itemsPerPage = 5;
  @Input() page = 1;
  @Input() totalItems = 0;

  @Output() pageChange = new EventEmitter<PageEvent>();
  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.pageChange.emit();
  }
}
