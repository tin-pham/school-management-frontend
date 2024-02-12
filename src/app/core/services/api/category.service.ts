import { Injectable } from '@angular/core';
import { CategoryGetListDTO, CategoryStoreDTO, CategoryUpdateDTO } from '@shared/models/dto/category.dto';
import { API } from '@core/constants/api.constant';
import { CategoryGetDetailRO, CategoryGetListRO, CategoryStoreRO, CategoryUpdateRO } from '@shared/models/ro/category.ro';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class CategoryService extends BaseService {
  search$ = new BehaviorSubject<string>('');

  setSearch(search: string) {
    this.search$.next(search);
  }

  getList(dto?: CategoryGetListDTO): Observable<CategoryGetListRO> {
    return this.get<CategoryGetListRO>(API.CATEGORY.CONTROLLER + API.CATEGORY.GET_LIST.ROUTE, dto);
  }

  store(dto: CategoryStoreDTO) {
    return this.post<CategoryStoreRO>(API.CATEGORY.CONTROLLER + API.CATEGORY.STORE.ROUTE, dto);
  }

  getDetail(id: string): Observable<CategoryGetDetailRO> {
    return this.get<CategoryGetDetailRO>(API.CATEGORY.CONTROLLER + '/' + API.CATEGORY.GET_DETAIL.ROUTE.replace(':id', id));
  }

  update(id: number, dto: CategoryUpdateDTO): Observable<CategoryUpdateRO> {
    return this.patch<CategoryUpdateRO>(API.CATEGORY.CONTROLLER + '/' + API.CATEGORY.UPDATE.ROUTE, id, dto);
  }

  delete(id: number) {
    return this._delete(API.CATEGORY.CONTROLLER + '/' + API.CATEGORY.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
