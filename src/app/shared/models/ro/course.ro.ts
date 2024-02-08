import { PaginateRO } from './paginate.ro';

export class CourseStoreRO {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export class CourseUpdateRO {
  name?: string;
  description?: string;
  imageUrl?: string;
}

export class CourseGetListDataRO {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export class CourseGetListRO extends PaginateRO<CourseGetListDataRO> {
  data: CourseGetListDataRO[];
}
