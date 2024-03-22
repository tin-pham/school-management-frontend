import { Injectable } from '@angular/core';
import { CourseOutcomeGetListDTO, CourseOutcomeStoreDTO, CourseOutcomeUpdateDTO } from '@shared/models/dto/course-outcome.dto';
import { Observable } from 'rxjs';
import {
  CourseOutcomeDeleteRO,
  CourseOutcomeGetListRO,
  CourseOutcomeStoreRO,
  CourseOutcomeUpdateRO,
} from '@shared/models/ro/course-outcome.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class CourseOutcomeService extends BaseService {
  store(dto: CourseOutcomeStoreDTO): Observable<CourseOutcomeStoreRO> {
    return this.post(API.COURSE_OUTCOME.CONTROLLER + '/' + API.COURSE_OUTCOME.STORE.ROUTE, dto);
  }

  update(id: number, dto: CourseOutcomeUpdateDTO): Observable<CourseOutcomeUpdateRO> {
    return this.patch(API.COURSE_OUTCOME.CONTROLLER + '/' + API.COURSE_OUTCOME.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<CourseOutcomeDeleteRO> {
    return this._delete(API.COURSE_OUTCOME.CONTROLLER + '/' + API.COURSE_OUTCOME.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getList(dto: CourseOutcomeGetListDTO): Observable<CourseOutcomeGetListRO> {
    return this.get(API.COURSE_OUTCOME.CONTROLLER + '/' + API.COURSE_OUTCOME.GET_LIST.ROUTE, dto);
  }
}
