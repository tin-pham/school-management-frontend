import { PaginateDTO } from './paginate.dto';

export class LessonAttachmentBulkStoreFileDTO {
  url: string;
  name: string;
  size: string;
  type: string;
}

export class LessonAttachmentBulkStoreDTO {
  files: LessonAttachmentBulkStoreFileDTO[];
  lessonId: number;

  constructor(data?: LessonAttachmentBulkStoreDTO) {
    Object.assign(this, data);
  }
}

export class LessonAttachmentBulkDeleteDTO {
  ids: number[];
}

export class LessonAttachmentGetListDTO extends PaginateDTO {
  lessonId: number;
}
