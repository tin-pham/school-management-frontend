import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';

import { ResultRO } from '@shared/models/ro/result.ro';
import { CourseImageUpsertDTO } from '@shared/models/dto/course-image.dto';
import { BaseService } from './base.service';

@Injectable()
export class CourseImageService extends BaseService {
  upsert(courseId: number, dto: CourseImageUpsertDTO): Observable<ResultRO> {
    const formData = this.getFileFormData(dto.files);
    return this.post(API.COURSE_IMAGE.CONTROLLER + '/' + API.COURSE_IMAGE.UPSERT.ROUTE.replace(':courseId', courseId.toString()), formData);
  }
}
