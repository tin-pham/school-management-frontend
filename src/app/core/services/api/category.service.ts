import { Injectable } from '@angular/core';
import { CategoryGetListDTO, CategoryStoreDTO } from '@shared/models/dto/category.dto';
import { API } from '@core/constants/api.constant';
import { CategoryGetListRO, CategoryStoreRO } from '@shared/models/ro/category.ro';
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
}
