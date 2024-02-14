import { Injectable } from '@angular/core';
import { LessonGetListDTO, LessonStoreDTO, LessonUpdateDTO } from '@shared/models/dto/lesson.dto';
import { Observable } from 'rxjs';
import { LessonDeleteRO, LessonGetListRO, LessonStoreRO, LessonUpdateRO } from '@shared/models/ro/lesson.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class LessonService extends BaseService {
  store(dto: LessonStoreDTO): Observable<LessonStoreRO> {
    return this.post<LessonStoreRO>(API.LESSON.CONTROLLER + '/' + API.LESSON.STORE.ROUTE, dto);
  }

  getList(dto: LessonGetListDTO): Observable<LessonGetListRO> {
    return this.get<LessonGetListRO>(API.LESSON.CONTROLLER + API.LESSON.GET_LIST.ROUTE, dto);
  }

  update(id: number, dto: LessonUpdateDTO): Observable<LessonUpdateRO> {
    return this.patch<LessonUpdateRO>(API.LESSON.CONTROLLER + '/' + API.LESSON.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<LessonDeleteRO> {
    return this._delete<LessonDeleteRO>(API.LESSON.CONTROLLER + '/' + API.LESSON.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
