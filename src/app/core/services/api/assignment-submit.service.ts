import { Injectable } from '@angular/core';
import { AssignmentSubmitStoreDTO } from '@shared/models/dto/assignment-submit.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class AssignmentSubmitService extends BaseService {
  store(dto: AssignmentSubmitStoreDTO): Observable<ResultRO> {
    const formData = new FormData();
    formData.append('file', dto.file);
    formData.append('assignmentId', dto.assignmentId.toString());
    return this.post(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.STORE.ROUTE, formData);
  }

  delete(id: number): Observable<ResultRO> {
    return this._delete(API.ASSIGNMENT_SUBMIT.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
