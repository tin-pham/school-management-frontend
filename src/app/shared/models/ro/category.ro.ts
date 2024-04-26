import { PaginateRO } from './paginate.ro';

export class CategoryStoreRO {
  id: number;
  name: string;

  constructor(data?: CategoryStoreRO) {
    Object.assign(this, data);
  }
}

export class CategoryGetListDataCourseRO {
  id: number;
  name: string;
}

export class CategoryGetListDataRO {
  id: number;
  name: string;
  courseCount?: number;
  createdBy: number;
}

export class CategoryGetListRO extends PaginateRO<CategoryGetListDataRO> {
  data: CategoryGetListDataRO[];
}

export class CategoryGetDetailRO {
  id: number;
  name: string;
  description: object;
  createdBy: number;
  constructor(data?: CategoryGetDetailRO) {
    Object.assign(this, data);
  }
}

export class CategoryUpdateRO {
  id: number;
  name: string;

  constructor(data?: CategoryUpdateRO) {
    Object.assign(this, data);
  }
}
