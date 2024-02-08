import { PaginateRO } from './paginate.ro';

export class CategoryGetListDataCourseRO {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export class CategoryGetListDataRO {
  id: number;
  name: string;
  description: string;
  courses?: CategoryGetListDataCourseRO[];
  courseCount?: number;
}

export class CategoryGetListRO extends PaginateRO<CategoryGetListDataRO> {
  data: CategoryGetListDataRO[];
}

export class CategoryStoreRO {
  id: number;
  name: string;
  description: string;
}

export class CategoryGetDetailDataCourseRO {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export class CategoryGetDetailRO {
  id: number;
  name: string;
  description: string;
  courses?: CategoryGetDetailDataCourseRO[];
  courseCount?: number;

  constructor(data?: CategoryGetDetailRO) {
    Object.assign(this, data);
  }
}

export class CategoryUpdateRO {
  id: number;
  name: string;
  description: string;

  constructor(data?: CategoryUpdateRO) {
    Object.assign(this, data);
  }
}
