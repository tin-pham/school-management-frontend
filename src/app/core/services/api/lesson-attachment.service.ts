import { Injectable } from '@angular/core';
import { LessonAttachmentBulkStoreDTO, LessonAttachmentGetListDTO } from '@shared/models/dto/lesson-attachment.dto';
import { API } from '@core/constants/api.constant';
import { LessonAttachmentGetListRO } from '@shared/models/ro/lesson-attachment.ro';
import { Observable } from 'rxjs';
import { ResultRO } from '@shared/models/ro/result.ro';
import { BaseService } from './base.service';

@Injectable()
export class LessonAttachmentService extends BaseService {
  bulkStore(dto: LessonAttachmentBulkStoreDTO): Observable<ResultRO> {
    return this.post<ResultRO>(API.LESSON_ATTACHMENT.CONTROLLER + '/' + API.LESSON_ATTACHMENT.BULK_STORE.ROUTE, dto);
  }

  getList(dto: LessonAttachmentGetListDTO): Observable<LessonAttachmentGetListRO> {
    return this.get<LessonAttachmentGetListRO>(API.LESSON_ATTACHMENT.CONTROLLER + '/' + API.LESSON_ATTACHMENT.GET_LIST.ROUTE, dto);
  }
}
