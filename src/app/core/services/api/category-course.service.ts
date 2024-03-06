import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { CategoryCourseDeleteDTO } from '@shared/models/dto/category-course.dto';
import { BaseService } from './base.service';

@Injectable()
export class CategoryCourseService extends BaseService {
  delete(dto: CategoryCourseDeleteDTO): Observable<ResultRO> {
    return this._delete<ResultRO>(API.CATEGORY_COURSE.CONTROLLER + '/' + API.CATEGORY_COURSE.DELETE.ROUTE, dto);
  }
}
