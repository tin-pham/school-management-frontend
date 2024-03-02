import { Injectable } from '@angular/core';
import { AssignmentSubmitGradeStoreDTO } from '@shared/models/dto/aassignment-submit-grade.dto';
import { Observable } from 'rxjs';
import { AssignmentSubmitGradeStoreRO } from '@shared/models/ro/assignment-submit-grade.ro';
import { API } from '@core/constants/api.constant';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class AssignmentSubmitGradeService extends BaseService {
  store(dto: AssignmentSubmitGradeStoreDTO): Observable<AssignmentSubmitGradeStoreRO> {
    return this.post<AssignmentSubmitGradeStoreRO>(
      API.ASSIGNMENT_SUBMIT_GRADE.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT_GRADE.STORE.ROUTE,
      dto,
    );
  }

  delete(id: number): Observable<ResultRO> {
    return this._delete(
      API.ASSIGNMENT_SUBMIT_GRADE.CONTROLLER + '/' + API.ASSIGNMENT_SUBMIT_GRADE.DELETE.ROUTE.replace(':id', id.toString()),
    );
  }
}
