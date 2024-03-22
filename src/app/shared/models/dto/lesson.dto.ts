import { PaginateDTO } from './paginate.dto';

export class LessonStoreDTO {
  title: string;
  body?: object;
  sectionId: number;
  videoUrl?: string;
  constructor(data?: LessonStoreDTO) {
    Object.assign(this, data);
  }
}

export class LessonGetListDTO extends PaginateDTO {
  sectionId?: number;
}

export class LessonUpdateDTO {
  title?: string;
  body?: object;
  videoUrl?: string;
  constructor(data: LessonUpdateDTO) {
    Object.assign(this, data);
  }
}
