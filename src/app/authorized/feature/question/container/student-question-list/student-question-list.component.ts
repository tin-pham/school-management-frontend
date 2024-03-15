import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionService } from '@core/services/api/question.service';
import { QuestionGetListDTO, QuestionStudentGetListDTO } from '@shared/models/dto/question.dto';
import { QuestionGetListDataRO } from '@shared/models/ro/question.ro';

@Component({
  selector: 'app-student-question-list',
  styleUrls: ['student-question-list.component.scss'],
  templateUrl: 'student-question-list.component.html',
})
export class StudentQuestionListComponent {
  questions: QuestionGetListDataRO[] = [];
  dto: QuestionGetListDTO;

  @Input() exerciseId: number;

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
    this._questionService.studentGetList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.questions = response.data;
      console.log(this.questions);
      this.cd.markForCheck();
    });
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    const dto = this.getDto();
    this.loadQuestions(dto);
  }

  getDto() {
    const dto = new QuestionStudentGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
      exerciseId: this.exerciseId,
    });

    return dto;
  }
}
