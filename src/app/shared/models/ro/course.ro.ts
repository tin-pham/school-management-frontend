import { PaginateRO } from './paginate.ro';

export class CourseStoreRO {
  id: number;
  name: string;
  description?: string;
}

export class CourseGetListDataRO {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
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
}

export class CourseUpdateRO {
  id: number;
  name: string;
  description?: string;
}

export class CourseDeleteRO {
  id: number;
}
