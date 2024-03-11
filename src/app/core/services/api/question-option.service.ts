import { Injectable } from '@angular/core';
import { QuestionOptionStoreDTO, QuestionOptionUpdateDTO } from '@shared/models/dto/question-option.dto';
import { QuestionOptionStoreRO, QuestionOptionUpdateRO } from '@shared/models/ro/question-option.ro';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class QuestionOptionService extends BaseService {
  update(id: number, dto: QuestionOptionUpdateDTO): Observable<QuestionOptionUpdateRO> {
    return this.patch(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.UPDATE.ROUTE, id, dto);
  }

  delete(id: number) {
    return this._delete(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.DELETE.ROUTE.replace(':id', id.toString()));
  }

  store(dto: QuestionOptionStoreDTO): Observable<QuestionOptionStoreRO> {
    return this.post(API.QUESTION_OPTION.CONTROLLER + '/' + API.QUESTION_OPTION.STORE.ROUTE, dto);
  }
}
