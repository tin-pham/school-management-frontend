import { PaginateRO } from './paginate.ro';

export class LessonCommentStoreRO {
  id: number;
  body: string;
  lessonId: number;
  createdBy: number;
  parentId?: number;

  constructor(data?: LessonCommentStoreRO) {
    Object.assign(this, data);
  }
}

export class LessonCommentGetListDataRO {
  id: number;
  body: string;
  lessonId: number;
  createdBy: number;
  parentId?: number;
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
