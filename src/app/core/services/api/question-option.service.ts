import { Injectable } from '@angular/core';
import { QuestionOptionBulkUpdateDTO, QuestionOptionStoreDTO } from '@shared/models/dto/question-option.dto';
import { QuestionOptionStoreRO } from '@shared/models/ro/question-option.ro';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class QuestionOptionService extends BaseService {
  bulkUpdate(dto: QuestionOptionBulkUpdateDTO): Observable<ResultRO> {
    return this.post(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.BULK_UPDATE.ROUTE, dto);
  }

  delete(id: number) {
    return this._delete(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.DELETE.ROUTE.replace(':id', id.toString()));
  }

  store(dto: QuestionOptionStoreDTO): Observable<QuestionOptionStoreRO> {
    return this.post(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.STORE.ROUTE, dto);
  }
}
