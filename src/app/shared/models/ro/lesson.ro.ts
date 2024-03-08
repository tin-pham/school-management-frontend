import { PaginateRO } from './paginate.ro';

export class LessonStoreRO {
  id: number;
  title: string;
  body: string;
  sectionId: number;
  videoUrl: string;
}

export class LessonGetListDataRO {
  id: number;
  title: string;
  body: string;
}

export class LessonGetListRO extends PaginateRO<LessonGetListDataRO> {
  data: LessonGetListDataRO[];
}

export class LessonGetDetailRO {
  id: number;
  title: string;
  body: string;
  videoUrl: string;
  sectionId: number;
  courseId: number;
}

export class LessonUpdateRO {
  id: number;
  title: string;
  body: string;
  sectionId: number;
  videoUrl: string;
}

export class LessonDeleteRO {
  id: number;
}
