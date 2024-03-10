import { Injectable } from '@angular/core';
import { QuestionCategoryGetListDTO, QuestionCategoryStoreDTO } from '@shared/models/dto/question-category.dto';
import {
  QuestionCategoryDeleteRO,
  QuestionCategoryGetDetailRO,
  QuestionCategoryGetListRO,
  QuestionCategoryStoreRO,
} from '@shared/models/ro/question-category.ro';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class QuestionCategoryService extends BaseService {
  getList(dto: QuestionCategoryGetListDTO): Observable<QuestionCategoryGetListRO> {
    return this.get(API.QUESTION_CATEGORY.CONTROLLER + '/' + API.QUESTION_CATEGORY.GET_LIST.ROUTE, dto);
  }

  store(dto: QuestionCategoryStoreDTO): Observable<QuestionCategoryStoreRO> {
    return this.post(API.QUESTION_CATEGORY.CONTROLLER + '/' + API.QUESTION_CATEGORY.STORE.ROUTE, dto);
  }

  update(id: number, dto: QuestionCategoryStoreDTO): Observable<QuestionCategoryStoreRO> {
    return this.patch(API.QUESTION_CATEGORY.CONTROLLER + '/' + API.QUESTION_CATEGORY.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<QuestionCategoryDeleteRO> {
    return this._delete(API.QUESTION_CATEGORY.CONTROLLER + '/' + API.QUESTION_CATEGORY.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getDetail(id: number): Observable<QuestionCategoryGetDetailRO> {
    return this.get(API.QUESTION_CATEGORY.CONTROLLER + '/' + API.QUESTION_CATEGORY.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }
}
