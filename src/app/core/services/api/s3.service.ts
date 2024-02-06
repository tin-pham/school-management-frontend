import { Injectable } from '@angular/core';
import { S3UploadDTO } from '@shared/models/dto/s3.dto';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class S3Service extends BaseService {
  bulkUpload(dto: S3UploadDTO) {
    return this.post(API.S3.CONTROLLER + API.S3.BULK_UPLOAD, dto);
  }
}
