import { PaginateDTO } from './paginate.dto';

export class LessonCommentStoreDTO {
  lessonId: number;
  body: string;
  parentId?: number;

  constructor(data?: LessonCommentStoreDTO) {
    Object.assign(this, data);
  }
}

export class LessonCommentGetListDTO extends PaginateDTO {
  lessonId: number;
  commentId?: number;

  constructor(data?: LessonCommentGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class LessonCommentUpdateDTO {
  body: string;
}
