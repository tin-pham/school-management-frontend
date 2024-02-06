import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { CourseStoreDTO, CourseUpdateDTO } from '@shared/models/dto/course.dto';
import { CourseStoreRO, CourseUpdateRO } from '@shared/models/ro/course.ro';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class CourseService extends BaseService {
  getList() {
    return this.get(API.COURSE.CONTROLLER + API.COURSE.GET_LIST.ROUTE);
  }

  store(dto: CourseStoreDTO): Observable<CourseStoreRO> {
    return this.post<CourseStoreRO>(API.COURSE.CONTROLLER + API.COURSE.STORE.ROUTE, dto);
  }

  update(dto?: CourseUpdateDTO): Observable<CourseUpdateRO> {
    return this.post<CourseUpdateRO>(API.COURSE.CONTROLLER + API.COURSE.UPDATE.ROUTE, dto);
  }
}
