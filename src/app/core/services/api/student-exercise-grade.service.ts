import { Injectable } from '@angular/core';
import { StudentExerciseGradeCalculateDTO } from '@shared/models/dto/student-exercise-grade.dto';
import { Observable } from 'rxjs';
import { StudentExerciseGradeCalculateRO } from '@shared/models/ro/student-exercise-grade.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class StudentExerciseGradeService extends BaseService {
  calculate(dto: StudentExerciseGradeCalculateDTO): Observable<StudentExerciseGradeCalculateRO> {
    return this.post<StudentExerciseGradeCalculateRO>(
      API.STUDENT_EXERCISE_GRADE.CONTROLLER + '/' + API.STUDENT_EXERCISE_GRADE.CALCULATE.ROUTE,
      dto,
    );
  }
}
