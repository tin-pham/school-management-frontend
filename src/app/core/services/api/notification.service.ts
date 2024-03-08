import { Injectable } from '@angular/core';
import { NotificationGetListDTO } from '@shared/models/dto/notification.dto';
import { Observable } from 'rxjs';
import { NotificationGetListRO } from '@shared/models/ro/notification.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class NotificationService extends BaseService {
  getList(dto: NotificationGetListDTO): Observable<NotificationGetListRO> {
    return this.get<NotificationGetListRO>(API.NOTIFICATION.CONTROLLER + '/' + API.NOTIFICATION.GET_LIST.ROUTE, dto);
  }
}
