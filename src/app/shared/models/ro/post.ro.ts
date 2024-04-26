import { PaginateRO } from './paginate.ro';

export class PostStoreRO {
  id: number;
  courseId: number;
}

export class PostGetListDataAttachmentRO {
  id: number;
  name: string;
  url: string;
  type: string;
}

export class PostGetListDataRO {
  id: number;
  content: object;
  attachments: PostGetListDataAttachmentRO[];
  createdByDisplayName: string;
  createdByUsername: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
  createdByImageUrl: string;
}

export class PostGetListRO extends PaginateRO<PostGetListDataRO> {
  data: PostGetListDataRO[];
}
export class PostGetDetailAttachmentRO {
  id: number;
  url: string;
  name: string;
  type: string;
}

export class PostGetDetailRO {
  id: number;
  content: object;
  attachments: PostGetDetailAttachmentRO[];
  createdByDisplayName: string;
  createdByUsername: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
  createdByImageUrl: string;
}
