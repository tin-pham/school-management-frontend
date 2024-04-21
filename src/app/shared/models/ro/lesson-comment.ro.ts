import { PaginateRO } from './paginate.ro';

export class LessonCommentStoreRO {
  id: number;
  body: string;
  createdAt: Date;
  createdBy: number;
  lessonId: number;
  parentId?: number;
  userId: number;
  username: string;
  userDisplayName: string;
  userImageUrl?: string;

  constructor(data?: LessonCommentStoreRO) {
    Object.assign(this, data);
  }
}

export class LessonCommentGetListDataRO {
  id: number;
  body: string;
  createdAt: Date;
  createdBy: number;
  lessonId: number;
  parentId?: number;
  userId: number;
  username: string;
  userDisplayName: string;
  userImageUrl?: string;
  depth: number;

  // calculate
  replies?: LessonCommentGetListDataRO[];
}

export class LessonCommentGetListRO extends PaginateRO<LessonCommentGetListDataRO> {
  override data: LessonCommentGetListDataRO[];
}

export class LessonCommentGetDetailRO {
  id: number;
  body: string;
  lessonId: number;
  createdBy: number;
  parentId: number;

  constructor(data?: LessonCommentGetDetailRO) {
    Object.assign(this, data);
  }
}

export class LessonCommentUpdateRO {
  id: number;
  body: string;

  constructor(data?: Partial<LessonCommentUpdateRO>) {
    Object.assign(this, data);
  }
}

export class LessonCommentDeleteRO {
  id: number;

  constructor(data?: Partial<LessonCommentDeleteRO>) {
    Object.assign(this, data);
  }
}
