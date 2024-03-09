import { PaginateRO } from './paginate.ro';

export class CourseStoreRO {
  id: number;
  name: string;
  description?: string;
  levelId?: number;
  hours?: number;
}

export class CourseGetListDataRO {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  unsubmittedPendingCount?: number;
  levelName?: string;
  levelId?: number;
  hours?: number;
}

export class CourseGetListRO extends PaginateRO<CourseGetListDataRO> {
  data: CourseGetListDataRO[];
}

export class CourseGetDetailRO {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  categoryIds: number[];
  levelName?: string;
  levelId?: number;
  hours?: number;
  lessonCount?: number;
}

export class CourseUpdateRO {
  id: number;
  name: string;
  description?: string;
  levelId?: number;
  hours?: number;
}

export class CourseDeleteRO {
  id: number;
}
