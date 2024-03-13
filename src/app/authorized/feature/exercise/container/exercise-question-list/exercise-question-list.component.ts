import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionGetListDTO } from '@shared/models/dto/question.dto';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-exercise-question-list',
  styleUrls: ['exercise-question-list.component.scss'],
  templateUrl: 'exercise-question-list.component.html',
})
export class ExerciseQuestionListComponent implements OnInit {
  @Input() exerciseId: number;
  questions: QuestionGetListDataRO[];

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private _questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.loadQuestions({
      exerciseId: this.exerciseId,
      limit: this.itemsPerPage,
      page: this.page,
    });
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
    this.loadQuestions({
      exerciseId: this.exerciseId,
      limit: this.itemsPerPage,
      page: this.page,
    });
  }

  @Output() onDelete = new EventEmitter();
  delete(questionId: number) {
    this.onDelete.emit(questionId);
    this.loadQuestions({ exerciseId: this.exerciseId, page: this.page, limit: this.itemsPerPage });
  }

  @Output() onEdit = new EventEmitter();
  edit(questionId: number) {
    this.onEdit.emit(questionId);
  }
}
