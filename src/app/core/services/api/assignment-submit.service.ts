import { Injectable } from '@angular/core';
import {
  AssignmentSubmitGetListDTO,
  AssignmentSubmitGetStatisticDTO,
  AssignmentSubmitStoreDTO,
} from '@shared/models/dto/assignment-submit.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import {
  AssignmentSubmitGetDetailRO,
  AssignmentSubmitGetGradeRO,
  AssignmentSubmitGetListRO,
  AssignmentSubmitGetStatisticRO,
} from '@shared/models/ro/assignment-submit.ro';
import { BaseService } from './base.service';

@Injectable()
export class AssignmentSubmitService extends BaseService {
  getDetail(id: number): Observable<AssignmentSubmitGetDetailRO> {
    return this.get(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }

  getList(dto: AssignmentSubmitGetListDTO): Observable<AssignmentSubmitGetListRO> {
    return this.get(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.GET_LIST.ROUTE, dto);
  }

  store(dto: AssignmentSubmitStoreDTO): Observable<ResultRO> {
    const formData = new FormData();
    formData.append('file', dto.file);
    formData.append('assignmentId', dto.assignmentId.toString());
    return this.post(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.STORE.ROUTE, formData);
  }

  delete(id: number): Observable<ResultRO> {
    return this._delete(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getStatistic(dto: AssignmentSubmitGetStatisticDTO): Observable<AssignmentSubmitGetStatisticRO> {
    return this.get(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.GET_STATISTIC.ROUTE, dto);
  }

  getGrade(id: number): Observable<AssignmentSubmitGetGradeRO> {
    return this.get(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.GET_GRADE.ROUTE.replace(':id', id.toString()));
  }
}
