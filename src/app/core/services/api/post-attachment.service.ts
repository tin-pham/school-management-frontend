import { Injectable } from '@angular/core';
import { PostAttachmentBulkDeleteDTO, PostAttachmentBulkStoreDTO } from '@shared/models/dto/post-assignment.dto';
import { ResultRO } from '@shared/models/ro/result.ro';
import { Observable } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class PostAttachmentService extends BaseService {
  bulkStore(dto: PostAttachmentBulkStoreDTO): Observable<ResultRO> {
    const formData = new FormData();

    for (const file of dto.files) {
      formData.append('files', file);
    }

    // Append name
    formData.append('postId', dto.postId.toString());
    return this.post(API.POST_ATTACHMENT.CONTROLLER + '/' + API.POST_ATTACHMENT.BULK_STORE.ROUTE, formData);
  }

  bulkDelete(dto: PostAttachmentBulkDeleteDTO): Observable<ResultRO> {
    return this._delete<ResultRO>(API.POST_ATTACHMENT.CONTROLLER + '/' + API.POST_ATTACHMENT.BULK_DELETE.ROUTE, dto);
  }
}
