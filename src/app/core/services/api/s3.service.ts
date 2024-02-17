import { Injectable } from '@angular/core';
import { S3UploadDTO } from '@shared/models/dto/s3.dto';
import { API } from '@core/constants/api.constant';
import { Observable } from 'rxjs';
import { S3UploadRO } from '@shared/models/ro/s3.ro';
import { BaseService } from './base.service';

@Injectable()
export class S3Service extends BaseService {
  bulkUpload(dto: S3UploadDTO): Observable<S3UploadRO> {
    const formData = new FormData();

    for (const file of dto.files) {
      formData.append('files', file);
    }

    // Append name
    formData.append('directoryPath', dto.directoryPath);
    return this.post(API.S3.CONTROLLER + '/' + API.S3.BULK_UPLOAD.ROUTE, formData);
  }
}
