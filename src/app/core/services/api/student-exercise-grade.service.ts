import { Injectable } from '@angular/core';
import {
  StudentExerciseGradeBulkCalculateDTO,
  StudentExerciseGradeCalculateDTO,
  StudentExerciseGradeDeleteAllDTO,
} from '@shared/models/dto/student-exercise-grade.dto';
import { Observable } from 'rxjs';
import { StudentExerciseGradeCalculateRO } from '@shared/models/ro/student-exercise-grade.ro';
import { API } from '@core/constants/api.constant';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class StudentExerciseGradeService extends BaseService {
  calculate(dto: StudentExerciseGradeCalculateDTO): Observable<StudentExerciseGradeCalculateRO> {
    return this.post<StudentExerciseGradeCalculateRO>(
      API.STUDENT_EXERCISE_GRADE.CONTROLLER + '/' + API.STUDENT_EXERCISE_GRADE.CALCULATE.ROUTE,
      dto,
    );
  }

  bulkCalculate(dto: StudentExerciseGradeBulkCalculateDTO): Observable<ResultRO> {
    return this.post<StudentExerciseGradeCalculateRO>(
      API.STUDENT_EXERCISE_GRADE.CONTROLLER + '/' + API.STUDENT_EXERCISE_GRADE.BULK_CALCULATE.ROUTE,
      dto,
    );
  }

  deleteAll(dto: StudentExerciseGradeDeleteAllDTO): Observable<ResultRO> {
    return this.post(API.STUDENT_EXERCISE_GRADE.CONTROLLER + '/' + API.STUDENT_EXERCISE_GRADE.DELETE_ALL.ROUTE, dto);
  }
}
