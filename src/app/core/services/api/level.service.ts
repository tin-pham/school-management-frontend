import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { LevelGetListRO } from '@shared/models/ro/level.ro';
import { BaseService } from './base.service';

@Injectable()
export class LevelService extends BaseService {
  getList(): Observable<LevelGetListRO> {
    return this.get(API.LEVEL.CONTROLLER + '/' + API.LEVEL.GET_LIST.ROUTE);
  }
}
