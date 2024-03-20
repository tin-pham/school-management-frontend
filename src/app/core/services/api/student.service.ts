import { Injectable } from '@angular/core';
import { StudentGetListDTO, StudentStoreDTO, StudentUpdateDTO } from '@shared/models/dto/student.dto';
import { Observable } from 'rxjs';
import { StudentGetListRO, StudentStoreRO, StudentUpdateRO } from '@shared/models/ro/student.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class StudentService extends BaseService {
  store(dto: StudentStoreDTO): Observable<StudentStoreRO> {
    return this.post<StudentStoreRO>(API.STUDENT.CONTROLLER + '/' + API.STUDENT.STORE.ROUTE, dto);
  }

  getList(dto: StudentGetListDTO): Observable<StudentGetListRO> {
    return this.get(API.STUDENT.CONTROLLER + '/' + API.STUDENT.GET_LIST.ROUTE, dto);
  }

  getDetail(id: string): Observable<StudentGetListRO> {
    return this.get(API.STUDENT.CONTROLLER + '/' + API.STUDENT.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }

  update(id: string, dto: StudentUpdateDTO): Observable<StudentUpdateRO> {
    return this.patch(API.STUDENT.CONTROLLER + '/' + API.STUDENT.UPDATE.ROUTE, id, dto);
  }

  delete(id: string) {
    return this._delete(API.STUDENT.CONTROLLER + '/' + API.STUDENT.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
