import { Injectable } from '@angular/core';
import {
  AttachmentBulkDeleteDTO,
  AttachmentBulkStoreDTO,
  AttachmentGetDetailDTO,
  AttachmentGetListDTO,
  AttachmentStoreDTO,
} from '@shared/models/dto/attachment.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { AttachmentGetDetailRO, AttachmentGetListRO, AttachmentStoreRO } from '@shared/models/ro/attachment.ro';
import { BaseService } from './base.service';

@Injectable()
export class AttachmentService extends BaseService {
  store(dto: AttachmentStoreDTO): Observable<AttachmentStoreRO> {
    return this.post<AttachmentStoreRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.STORE.ROUTE, dto);
  }

  bulkStore(dto: AttachmentBulkStoreDTO): Observable<ResultRO> {
    return this.post<ResultRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.BULK_STORE.ROUTE, dto);
  }

  getList(dto: AttachmentGetListDTO): Observable<AttachmentGetListRO> {
    return this.get<AttachmentGetListDTO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.GET_LIST.ROUTE, dto);
  }

  bulkDelete(dto: AttachmentBulkDeleteDTO): Observable<ResultRO> {
    return this._delete<ResultRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.BULK_DELETE.ROUTE, dto);
  }

  getDetailByAssignmentId(dto: AttachmentGetDetailDTO): Observable<AttachmentGetDetailRO> {
    return this.get<AttachmentGetListRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.GET_DETAIL.ROUTE, dto);
  }
}
