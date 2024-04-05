import { Injectable } from '@angular/core';
import {
  StudentExerciseGetListSubmittedDTO,
  StudentExerciseStoreDTO,
  StudentExerciseSubmitDTO,
} from '@shared/models/dto/student-exercise.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { StudentExerciseGetListSubmittedRO, StudentExerciseStoreRO } from '@shared/models/ro/student-exercise.ro';
import { BaseService } from './base.service';

@Injectable()
export class StudentExerciseService extends BaseService {
  store(dto: StudentExerciseStoreDTO): Observable<StudentExerciseStoreRO> {
    return this.post(API.STUDENT_EXERCISE.CONTROLLER + '/' + API.STUDENT_EXERCISE.STORE.ROUTE, dto);
  }

  submit(id: number, dto: StudentExerciseSubmitDTO): Observable<ResultRO> {
    return this.patch(API.STUDENT_EXERCISE.CONTROLLER + '/' + API.STUDENT_EXERCISE.SUBMIT.ROUTE, id, dto);
  }

  getSubmittedList(dto: StudentExerciseGetListSubmittedDTO): Observable<StudentExerciseGetListSubmittedRO> {
    return this.get(API.STUDENT_EXERCISE.CONTROLLER + '/' + API.STUDENT_EXERCISE.GET_SUBMITTED_LIST.ROUTE, dto);
  }

  delete(id: number): Observable<ResultRO> {
    return this._delete(API.STUDENT_EXERCISE.CONTROLLER + '/' + API.STUDENT_EXERCISE.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
