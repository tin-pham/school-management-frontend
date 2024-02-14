import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { SectionGetDetailDTO, SectionGetListDTO, SectionStoreDTO, SectionUpdateDTO } from '@shared/models/dto/section.dto';
import { Observable } from 'rxjs';
import { SectionDeleteRO, SectionGetDetailRO, SectionGetListRO, SectionStoreRO, SectionUpdateRO } from '@shared/models/ro/section.ro';
import { BaseService } from './base.service';

@Injectable()
export class SectionService extends BaseService {
  getList(dto?: SectionGetListDTO): Observable<SectionGetListRO> {
    return this.get(API.SECTION.CONTROLLER + API.SECTION.GET_LIST.ROUTE, dto);
  }

  getDetail(id: number, dto?: SectionGetDetailDTO): Observable<SectionGetDetailRO> {
    return this.get(API.SECTION.CONTROLLER + '/' + API.SECTION.GET_DETAIL.ROUTE.replace(':id', id.toString()), dto);
  }

  update(id: number, dto: SectionUpdateDTO): Observable<SectionUpdateRO> {
    return this.patch(API.SECTION.CONTROLLER + '/' + API.SECTION.UPDATE.ROUTE, id, dto);
  }

  store(dto: SectionStoreDTO): Observable<SectionStoreRO> {
    return this.post(API.SECTION.CONTROLLER + '/' + API.SECTION.STORE.ROUTE, dto);
  }

  delete(id: number): Observable<SectionDeleteRO> {
    return this._delete(API.SECTION.CONTROLLER + '/' + API.SECTION.DELETE.ROUTE.replace(':id', id.toString()));
  }
}
