import { Observable } from 'rxjs';
import { ExerciseDeleteRO, ExerciseGetDetailRO, ExerciseGetListRO, ExerciseStoreRO, ExerciseUpdateRO } from '@shared/models/ro/exercise.ro';
import { API } from '@core/constants/api.constant';
import { ExerciseGetDetailDTO, ExerciseGetListDTO, ExerciseStoreDTO, ExerciseUpdateDTO } from '@shared/models/dto/exercise.dto';
import { Injectable } from '@angular/core';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class ExerciseService extends BaseService {
  activate(id: number): Observable<ResultRO> {
    return this.patch(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.ACTIVATE.ROUTE, id);
  }

  update(id: number, dto: ExerciseUpdateDTO): Observable<ExerciseUpdateRO> {
    return this.patch(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.UPDATE.ROUTE, id, dto);
  }

  store(dto: ExerciseStoreDTO): Observable<ExerciseStoreRO> {
    return this.post(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.STORE.ROUTE, dto);
  }

  getList(dto: ExerciseGetListDTO): Observable<ExerciseGetListRO> {
    return this.get(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.GET_LIST.ROUTE, dto);
  }

  delete(id: number): Observable<ExerciseDeleteRO> {
    return this._delete(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getDetail(id: number, dto: ExerciseGetDetailDTO): Observable<ExerciseGetDetailRO> {
    return this.get(API.EXERCISE.CONTROLLER + '/' + API.EXERCISE.GET_DETAIL.ROUTE.replace(':id', id.toString()), dto);
  }
}
