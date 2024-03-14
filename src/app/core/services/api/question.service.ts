import { Injectable } from '@angular/core';
import { QuestionGetListDTO, QuestionStoreDTO, QuestionStudentGetListDTO, QuestionUpdateDTO } from '@shared/models/dto/question.dto';
import { Observable } from 'rxjs';
import {
  QuestionGetDetailRO,
  QuestionGetListRO,
  QuestionStoreRO,
  QuestionStudentGetListRO,
  QuestionUpdateRO,
} from '@shared/models/ro/question.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class QuestionService extends BaseService {
  studentGetList(dto: QuestionStudentGetListDTO): Observable<QuestionStudentGetListRO> {
    return this.get<QuestionStudentGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.STUDENT_GET_LIST.ROUTE, dto);
  }

  getList(dto: QuestionGetListDTO): Observable<QuestionGetListRO> {
    return this.get<QuestionGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.GET_LIST.ROUTE, dto);
  }

  store(dto: QuestionStoreDTO): Observable<QuestionStoreRO> {
    return this.post<QuestionGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.STORE.ROUTE, dto);
  }

  update(id: number, dto: QuestionUpdateDTO): Observable<QuestionUpdateRO> {
    return this.patch<QuestionGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<QuestionGetListRO> {
    return this._delete<QuestionGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getDetail(id: number): Observable<QuestionGetDetailRO> {
    return this.get<QuestionGetListRO>(API.QUESTION.CONTROLLER + '/' + API.QUESTION.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }
}
