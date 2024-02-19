import { PaginateDTO } from './paginate.dto';

export class AttachmentBulkStoreFileDTO {
  url: string;
  name: string;
  size: string;
  type: string;
}

export class AttachmentBulkStoreDTO {
  files: AttachmentBulkStoreFileDTO[];
  lessonId?: number;
  assignmentId?: number;
}

export class AttachmentBulkDeleteDTO {
  ids: number[];
}

export class AttachmentGetListDTO extends PaginateDTO {
  lessonId?: number;
  assignmentId?: number;

  constructor(data?: AttachmentGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}
