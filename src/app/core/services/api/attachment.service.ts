import { Injectable } from '@angular/core';
import { AttachmentBulkDeleteDTO, AttachmentBulkStoreDTO, AttachmentGetListDTO } from '@shared/models/dto/attachment.dto';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { API } from '@core/constants/api.constant';
import { LessonAttachmentGetListRO } from '@shared/models/ro/lesson-attachment.ro';
import { BaseService } from './base.service';

@Injectable()
export class AttachmentService extends BaseService {
  bulkStore(dto: AttachmentBulkStoreDTO): Observable<ResultRO> {
    return this.post<ResultRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.BULK_STORE.ROUTE, dto);
  }

  getList(dto: AttachmentGetListDTO): Observable<LessonAttachmentGetListRO> {
    return this.get<AttachmentGetListDTO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.GET_LIST.ROUTE, dto);
  }

  bulkDelete(dto: AttachmentBulkDeleteDTO): Observable<ResultRO> {
    return this._delete<ResultRO>(API.ATTACHMENT.CONTROLLER + '/' + API.ATTACHMENT.BULK_DELETE.ROUTE, dto);
  }
}
