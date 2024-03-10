import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { DifficultyGetListRO } from '@shared/models/ro/difficulty.ro';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class DifficultyService extends BaseService {
  getList(): Observable<DifficultyGetListRO> {
    return this.get(API.DIFFICULTY.CONTROLLER + '/' + API.DIFFICULTY.GET_LIST.ROUTE);
  }
}
