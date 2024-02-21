import { PaginateRO } from './paginate.ro';

export class CourseStoreRO {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
}

export class CourseGetListImageRO {
  id: number;
  url: string;
}

export class CourseGetListDataRO {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
  image?: CourseGetListImageRO;
}

export class CourseGetListRO extends PaginateRO<CourseGetListDataRO> {
  data: CourseGetListDataRO[];
}

export class CourseGetDetailImageRO {
  id: number;
  url: string;
}

export class CourseGetDetailRO {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
  image?: CourseGetDetailImageRO;
  categoryIds: number[];
}

export class CourseUpdateRO {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
}

export class CourseDeleteRO {
  id: number;
}
