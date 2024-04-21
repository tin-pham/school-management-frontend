import { Injectable } from '@angular/core';
import { UserNotificationBulkDeleteDTO, UserNotificationBulkUpdateDTO } from '@shared/models/dto/user-notification.dto';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class UserNotificationService extends BaseService {
  bulkUpdate(dto: UserNotificationBulkUpdateDTO): Observable<ResultRO> {
    return this.post<ResultRO>(API.USER_NOTIFICATION.CONTROLLER + '/' + API.USER_NOTIFICATION.BULK_UPDATE.ROUTE, dto);
  }

  bulkDelete(dto: UserNotificationBulkDeleteDTO): Observable<ResultRO> {
    return this._delete<ResultRO>(API.USER_NOTIFICATION.CONTROLLER + '/' + API.USER_NOTIFICATION.BULK_DELETE.ROUTE, dto);
  }

  readAll(): Observable<ResultRO> {
    return this.post<ResultRO>(API.USER_NOTIFICATION.CONTROLLER + '/' + API.USER_NOTIFICATION.READ_ALL.ROUTE);
  }
}
