import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { SectionGetListDTO } from '@shared/models/dto/section.dto';
import { Observable } from 'rxjs';
import { SectionGetListRO } from '@shared/models/ro/section.ro';
import { BaseService } from './base.service';

@Injectable()
export class SectionService extends BaseService {
  getList(dto?: SectionGetListDTO): Observable<SectionGetListRO> {
    return this.get(API.SECTION.CONTROLLER + API.SECTION.GET_LIST.ROUTE, dto);
  }

  getDetail(id: number) {
    return this.get(API.SECTION.CONTROLLER + '/' + API.SECTION.GET_DETAIL.ROUTE.replace(':id', id.toString()));
  }
}
