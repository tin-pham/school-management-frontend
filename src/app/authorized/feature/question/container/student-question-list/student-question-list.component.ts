import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ExerciseQuestionSnapshotService } from '@core/services/api/exercise-question-snapshot.service';
import { ExerciseQuestionSnapshotGetListDTO } from '@shared/models/dto/exercise-question-snapshot.dto';
import { QuestionGetListDTO, QuestionStudentGetListDTO } from '@shared/models/dto/question.dto';
import { ExerciseQuestionSnapshotGetListDataRO } from '@shared/models/ro/exercise-question-snapshot.ro';

@Component({
  selector: 'app-student-question-list',
  styleUrls: ['student-question-list.component.scss'],
  templateUrl: 'student-question-list.component.html',
})
export class StudentQuestionListComponent {
  questions: ExerciseQuestionSnapshotGetListDataRO[] = [];
  dto: ExerciseQuestionSnapshotGetListDTO;

  @Input() exerciseId: number;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private _exerciseQuestionSnapshotService: ExerciseQuestionSnapshotService,
  ) {}

  ngOnInit() {
    const dto = this.getDto();
    this.loadQuestions(dto);
  }

  loadQuestions(dto: QuestionGetListDTO) {
    this._exerciseQuestionSnapshotService.studentGetList(dto).subscribe(response => {
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

  getDto() {
    const dto = new QuestionStudentGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
      exerciseId: this.exerciseId,
    });

    return dto;
  }
}
