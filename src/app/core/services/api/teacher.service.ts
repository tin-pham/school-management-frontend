import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { TeacherGetListDTO, TeacherStoreDTO, TeacherUpdateDTO } from '@shared/models/dto/teacher.dto';
import { TeacherGetDetailRO, TeacherGetListRO, TeacherStoreRO, TeacherUpdateRO } from '@shared/models/ro/teacher.ro';
import { BaseService } from './base.service';

@Injectable()
export class TeacherService extends BaseService {
  store(dto: TeacherStoreDTO): Observable<TeacherStoreRO> {
    return this.post<TeacherStoreRO>(API.TEACHER.CONTROLLER + '/' + API.TEACHER.STORE.ROUTE, dto);
  }

  getList(dto: TeacherGetListDTO): Observable<TeacherGetListRO> {
    return this.get(API.TEACHER.CONTROLLER + '/' + API.TEACHER.GET_LIST.ROUTE, dto);
  }

  getDetail(id: string): Observable<TeacherGetDetailRO> {
    return this.get(API.TEACHER.CONTROLLER + '/' + API.TEACHER.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }

  update(id: string, dto: TeacherUpdateDTO): Observable<TeacherUpdateRO> {
    return this.patch(API.TEACHER.CONTROLLER + '/' + API.TEACHER.UPDATE.ROUTE, id, dto);
  }

  delete(id: string) {
    return this._delete(API.TEACHER.CONTROLLER + '/' + API.TEACHER.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
