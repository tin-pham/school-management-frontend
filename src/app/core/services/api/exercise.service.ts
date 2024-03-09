import { Observable } from 'rxjs';
import { ExerciseDeleteRO, ExerciseGetListRO, ExerciseStoreRO } from '@shared/models/ro/exercise.ro';
import { API } from '@core/constants/api.constant';
import { ExerciseGetListDTO, ExerciseStoreDTO } from '@shared/models/dto/exercise.dto';
import { BaseService } from './base.service';

export class ExerciseService extends BaseService {
  store(dto: ExerciseStoreDTO): Observable<ExerciseStoreRO> {
    return this.post(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.STORE.ROUTE, dto);
  }

  getList(dto: ExerciseGetListDTO): Observable<ExerciseGetListRO> {
    return this.get(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.GET_LIST.ROUTE, dto);
  }

  delete(id: number): Observable<ExerciseDeleteRO> {
    return this._delete(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
