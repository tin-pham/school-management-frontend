import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { DifficultyGetListRO } from '@shared/models/ro/difficulty.ro';
import { BaseService } from './base.service';

export class DifficultyService extends BaseService {
  getList(): Observable<DifficultyGetListRO> {
    return this.get(API.DIFFICULTY.CONTROLLER + '/' + API.DIFFICULTY.GET_LIST.ROUTE);
  }
}
