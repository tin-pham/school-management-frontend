import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { UserImageUpsertDTO } from '@shared/models/dto/user-image.dto';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class UserImageService extends BaseService {
  upsert(dto: UserImageUpsertDTO): Observable<ResultRO> {
    const formData = this.getFileFormData(dto.files);
    return this.post(API.USER_IMAGE.CONTROLLER + '/' + API.USER_IMAGE.UPSERT.ROUTE, formData);
  }
}
