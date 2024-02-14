import { PaginateDTO } from './paginate.dto';

export class LessonStoreDTO {
  title: string;
  body: string;
  sectionId: number;
  videoUrl?: string;
}

export class LessonGetListDTO extends PaginateDTO {
  sectionId?: number;
}

export class LessonUpdateDTO {
  title?: string;
  body?: string;
  videoUrl?: string;
  sectionId?: number | null;
}
