import { Injectable } from '@angular/core';
import {
  CourseStudentBulkStoreDTO,
  CourseStudentCheckRegisteredDTO,
  CourseStudentIsRegisteredDTO,
  CourseStudentRegisterDTO,
  CourseStudentUnRegisterDTO,
} from '@shared/models/dto/course-student.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { CourseStudentRegisterRO, CourseStudentUnRegisterRO } from '@shared/models/ro/course-student.ro';
import { BaseService } from './base.service';

@Injectable()
export class CourseStudentService extends BaseService {
  checkRegistered(dto: CourseStudentCheckRegisteredDTO): Observable<ResultRO> {
    return this.post(API.COURSE_STUDENT.CONTROLLER + '/' + API.COURSE_STUDENT.CHECK_REGISTERED.ROUTE, dto);
  }

  isRegistered(dto: CourseStudentIsRegisteredDTO): Observable<ResultRO> {
    return this.post(API.COURSE_STUDENT.CONTROLLER + '/' + API.COURSE_STUDENT.IS_REGISTERED.ROUTE, dto);
  }

  bulkStore(dto: CourseStudentBulkStoreDTO): Observable<ResultRO> {
    return this.post<ResultRO>(API.COURSE_STUDENT.CONTROLLER + '/' + API.COURSE_STUDENT.BULK_STORE.ROUTE, dto);
  }

  register(dto: CourseStudentRegisterDTO): Observable<CourseStudentRegisterRO> {
    return this.post<CourseStudentRegisterRO>(API.COURSE_STUDENT.CONTROLLER + '/' + API.COURSE_STUDENT.REGISTER.ROUTE, dto);
  }

  unRegister(dto: CourseStudentUnRegisterDTO): Observable<CourseStudentUnRegisterRO> {
    return this.post<CourseStudentUnRegisterRO>(API.COURSE_STUDENT.CONTROLLER + '/' + API.COURSE_STUDENT.UN_REGISTER.ROUTE, dto);
  }
}
