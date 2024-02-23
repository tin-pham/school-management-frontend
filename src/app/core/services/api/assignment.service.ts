import { Injectable } from '@angular/core';
import { AssignmentGetListDTO, AssignmentStoreDTO, AssignmentUpdateDTO } from '@shared/models/dto/assignment.dto';
import { AssignmentGetDetailRO, AssignmentGetListRO, AssignmentStoreRO, AssignmentUpdateRO } from '@shared/models/ro/assignment.ro';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class AssignmentService extends BaseService {
  update(id: number, dto: AssignmentUpdateDTO): Observable<AssignmentUpdateRO> {
    return this.patch<AssignmentUpdateRO>(API.ASSIGNMENT.CONTROLLER + '/' + API.ASSIGNMENT.UPDATE.ROUTE, id, dto);
  }

  getDetail(id: number): Observable<AssignmentGetDetailRO> {
    return this.get<AssignmentGetDetailRO>(API.ASSIGNMENT.CONTROLLER + '/' + API.ASSIGNMENT.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }

  store(dto: AssignmentStoreDTO): Observable<AssignmentStoreRO> {
    return this.post<AssignmentStoreRO>(API.ASSIGNMENT.CONTROLLER + '/' + API.ASSIGNMENT.STORE.ROUTE, dto);
  }

  getList(dto?: AssignmentGetListDTO): Observable<AssignmentGetListRO> {
    return this.get<AssignmentGetListRO>(API.ASSIGNMENT.CONTROLLER + API.ASSIGNMENT.GET_LIST.ROUTE, dto);
  }

  delete(id: number) {
    return this._delete(API.ASSIGNMENT.CONTROLLER + '/' + API.ASSIGNMENT.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
