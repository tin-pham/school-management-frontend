import { PaginateRO } from './paginate.ro';

export class SectionStoreRO {
  id: number;
  name: string;
  courseId: number;
}

export class SectionGetListDataLessonRO {
  id: number;
  title: string;
  videoDuration: string;
}

export class SectionGetListDataRO {
  id: number;
  name: string;
  lessons: SectionGetListDataLessonRO[];
}

export class SectionGetListRO extends PaginateRO<SectionGetListDataRO> {
  data: SectionGetListDataRO[];
}

export class SectionGetDetailLessonRO {
  id: number;
  title: string;
}

export class SectionGetDetailRO {
  id: number;
  name: string;
  courseId: number;
  lessons: SectionGetDetailLessonRO[];
}

export class SectionUpdateRO {
  id: number;
  name: string;
  courseId: number;
}

export class SectionDeleteRO {
  id: number;
}
