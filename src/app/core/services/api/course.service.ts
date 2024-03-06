import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { CourseGetDetailDTO, CourseGetListDTO, CourseStoreDTO, CourseUpdateDTO } from '@shared/models/dto/course.dto';
import {
  CourseDeleteRO,
  CourseGetDetailRO,
  CourseGetListDataRO,
  CourseGetListRO,
  CourseStoreRO,
  CourseUpdateRO,
} from '@shared/models/ro/course.ro';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class CourseService extends BaseService {
  uncategorizedCourses$ = new BehaviorSubject<CourseGetListDataRO[]>([]);

  setUncategorizedCourses(courses: CourseGetListDataRO[]) {
    this.uncategorizedCourses$.next(courses);
  }

  getDetail(id: number, dto?: CourseGetDetailDTO): Observable<CourseGetDetailRO> {
    return this.get<CourseGetDetailRO>(API.COURSE.CONTROLLER + '/' + API.COURSE.GET_DETAIL.ROUTE.replace(':id', id.toString()), dto);
  }

  getList(dto?: CourseGetListDTO): Observable<CourseGetListRO> {
    return this.get(API.COURSE.CONTROLLER + API.COURSE.GET_LIST.ROUTE, dto);
  }

  store(dto: CourseStoreDTO): Observable<CourseStoreRO> {
    return this.post<CourseStoreRO>(API.COURSE.CONTROLLER + API.COURSE.STORE.ROUTE, dto);
  }

  update(id: number, dto?: CourseUpdateDTO): Observable<CourseUpdateRO> {
    return this.patch<CourseUpdateRO>(API.COURSE.CONTROLLER + '/' + API.COURSE.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<CourseDeleteRO> {
    return this._delete<CourseDeleteRO>(API.COURSE.CONTROLLER + '/' + API.COURSE.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
