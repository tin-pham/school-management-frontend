import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { ExerciseQuestionBulkDeleteDTO, ExerciseQuestionBulkStoreDTO } from '@shared/models/dto/exercise-question.dto';
import { BaseService } from './base.service';

@Injectable()
export class ExerciseQuestionService extends BaseService {
  bulkStore(dto: ExerciseQuestionBulkStoreDTO): Observable<ResultRO> {
    return this.post(API.EXERCISE_QUESTION.CONTROLLER + '/' + API.EXERCISE_QUESTION.BULK_STORE.ROUTE, dto);
  }

  bulkDelete(dto: ExerciseQuestionBulkDeleteDTO): Observable<ResultRO> {
    return this._delete(API.EXERCISE_QUESTION.CONTROLLER + '/' + API.EXERCISE_QUESTION.BULK_DELETE.ROUTE, dto);
  }
}
