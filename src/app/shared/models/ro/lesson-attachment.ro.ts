import { PaginateRO } from './paginate.ro';

export class LessonAttachmentGetListDataRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
  createdAt: Date;
}

export class LessonAttachmentGetListRO extends PaginateRO<LessonAttachmentGetListDataRO> {
  data: LessonAttachmentGetListDataRO[];
}
