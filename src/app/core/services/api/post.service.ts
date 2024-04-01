import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { PostGetListDTO, PostStoreDTO } from '@shared/models/dto/post.dto';
import { Observable } from 'rxjs';
import { PostGetListRO, PostStoreRO } from '@shared/models/ro/post.ro';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class PostService extends BaseService {
  store(dto: PostStoreDTO): Observable<PostStoreRO> {
    return this.post(API.POST.CONTROLLER + '/' + API.POST.STORE.ROUTE, dto);
  }

  update(id: number, dto: PostStoreDTO): Observable<ResultRO> {
    return this.patch(API.POST.CONTROLLER + '/' + API.POST.UPDATE.ROUTE, id, dto);
  }

  delete(id: number): Observable<ResultRO> {
    return this._delete(API.POST.CONTROLLER + '/' + API.POST.DELETE.ROUTE.replace(':id', id.toString()));
  }

  getList(dto: PostGetListDTO): Observable<PostGetListRO> {
    return this.get(API.POST.CONTROLLER + '/' + API.POST.GET_LIST.ROUTE, dto);
  }
}
