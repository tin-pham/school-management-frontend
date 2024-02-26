import { PaginateRO } from './paginate.ro';

export class AttachmentStoreRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
  createdAt: Date;
  createdBy: number;
  lessonId?: number;
  assignmentId?: number;
}

export class AttachmentGetListDataRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
  createdAt: Date;
  createdBy: number;
  createdByDisplayName: string;
  createdByImageUrl: string;
}

export class AttachmentGetListRO extends PaginateRO<AttachmentGetListDataRO> {
  data: AttachmentGetListDataRO[];
}

export class AttachmentGetDetailRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
  createdAt: Date;
  createdBy: number;
}
