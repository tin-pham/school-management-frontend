import { Injectable } from '@angular/core';
import { ExerciseQuestionSnapshotGetListDTO } from '@shared/models/dto/exercise-question-snapshot.dto';
import { Observable } from 'rxjs';
import { ExerciseQuestionSnapshotGetListRO } from '@shared/models/ro/exercise-question-snapshot.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class ExerciseQuestionSnapshotService extends BaseService {
  studentGetList(dto: ExerciseQuestionSnapshotGetListDTO): Observable<ExerciseQuestionSnapshotGetListRO> {
    return this.get(API.EXERCISE_QUESTION_SNAPSHOT.CONTROLLER + '/' + API.EXERCISE_QUESTION_SNAPSHOT.STUDENT_GET_LIST.ROUTE, dto);
  }
}
