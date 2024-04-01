import { PaginateRO } from './paginate.ro';

export class PostStoreRO {
  id: number;
  courseId: number;
}

export class PostGetListDataAttachmentRO {
  name: string;
  url: string;
  type: string;
}

export class PostGetListDataRO {
  id: number;
  content: object;
  attachments: PostGetListDataAttachmentRO[];
  createdByDisplayName: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
  createdByImageUrl: string;
}

export class PostGetListRO extends PaginateRO<PostGetListDataRO> {
  data: PostGetListDataRO[];
}
