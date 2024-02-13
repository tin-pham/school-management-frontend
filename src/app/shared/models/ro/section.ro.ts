import { PaginateRO } from './paginate.ro';

export class SectionStoreRO {
  id: number;
  name: string;
  courseId: number;
}

export class SectionGetListDataLessonRO {
  id: number;
  title: string;
}

export class SectionGetListDataRO {
  id: number;
  name: string;
  lessons: SectionGetListDataLessonRO[];
}

export class SectionGetListRO extends PaginateRO<SectionGetListDataRO> {
  data: SectionGetListDataRO[];
}

export class SectionGetDetailRO {
  id: number;
  name: string;
  courseId: number;
}

export class SectionUpdateRO {
  id: number;
  name: string;
  courseId: number;
}

export class SectionDeleteRO {
  id: number;
}
