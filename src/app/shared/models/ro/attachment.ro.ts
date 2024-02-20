import { PaginateRO } from './paginate.ro';

export class AttachmentGetListDataRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
  createdAt: Date;
}

export class AttachmentGetListRO extends PaginateRO<AttachmentGetListDataRO> {
  data: AttachmentGetListDataRO[];
}

export class AttachmentStoreRO {
  id: number;
  url: string;
  name: string;
  type: string;
  size: string;
}
