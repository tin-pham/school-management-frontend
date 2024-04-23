import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseQuestionSnapshotService } from '@core/services/api/exercise-question-snapshot.service';
import { ExerciseQuestionSnapshotGetListDTO } from '@shared/models/dto/exercise-question-snapshot.dto';
import { StudentExerciseSubmitDTO, StudentExerciseSubmitSnapshotQuestionDTO } from '@shared/models/dto/student-exercise.dto';
import { ExerciseQuestionSnapshotGetListDataRO } from '@shared/models/ro/exercise-question-snapshot.ro';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';

@Component({
  selector: 'app-student-question-list',
  styleUrls: ['student-question-list.component.scss'],
  templateUrl: 'student-question-list.component.html',
})
export class StudentQuestionListComponent {
  questions: ExerciseQuestionSnapshotGetListDataRO[] = [];
  dto: ExerciseQuestionSnapshotGetListDTO;

  @Input() exercise: ExerciseGetDetailRO;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;
  @Input() studentExerciseSubmitDTO: StudentExerciseSubmitDTO = {
    snapshotQuestions: [],
  };

  @Output() studentExerciseSubmitDTOChange = new EventEmitter<StudentExerciseSubmitDTO>();
  onStudentExerciseSubmitDTOChange(data: StudentExerciseSubmitDTO) {
    this.studentExerciseSubmitDTOChange.emit(data);
  }

  constructor(
    private cd: ChangeDetectorRef,
    private _exerciseQuestionSnapshotService: ExerciseQuestionSnapshotService,
  ) {}

  ngOnInit() {
    const dto = this.getDto();
    // Initialize with selected option IDs if any
    this._exerciseQuestionSnapshotService.studentGetList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.questions = response.data;
      this.studentExerciseSubmitDTO.snapshotQuestions = [];
      // Initialize with selected option IDs if any
      this.questions.forEach(question => {
        const snapshotQuestion: StudentExerciseSubmitSnapshotQuestionDTO = {
          id: question.id,
          snapshotOptionIds: [], // Initialize with selected option IDs if any
        };
        this.studentExerciseSubmitDTO.snapshotQuestions.push(snapshotQuestion);
      });

      this.cd.markForCheck();
      this.onStudentExerciseSubmitDTOChange(this.studentExerciseSubmitDTO);
    });
  }

  loadQuestions(dto: ExerciseQuestionSnapshotGetListDTO) {
    this._exerciseQuestionSnapshotService.studentGetList(dto).subscribe(response => {
      this.totalItems = response.meta.totalItems;
      this.questions = response.data;
      this.cd.markForCheck();
      this.onStudentExerciseSubmitDTOChange(this.studentExerciseSubmitDTO);
    });
  }

  handlePageChange(event: any) {
    this.page = event.pageIndex + 1;
  }

  getDisplayedQuestions(): ExerciseQuestionSnapshotGetListDataRO[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.questions.slice(startIndex, endIndex);
  }

  getDto() {
    const dto = new ExerciseQuestionSnapshotGetListDTO({
      exerciseId: this.exercise.id,
    });

    return dto;
  }
}
