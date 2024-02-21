import { PaginateRO } from './paginate.ro';

export class CategoryStoreRO {
  id: number;
  name: string;
  description: string;

  constructor(data?: CategoryStoreRO) {
    Object.assign(this, data);
  }
}

export class CategoryGetListDataCourseImageRO {
  id: number;
  url: string;
}

export class CategoryGetListDataCourseRO {
  id: number;
  name: string;
  description: string;
  imageId: number;
  image: CategoryGetListDataCourseImageRO;
}

export class CategoryGetListDataRO {
  id: number;
  name: string;
  description: string;
  courseCount?: number;
}

export class CategoryGetListRO extends PaginateRO<CategoryGetListDataRO> {
  data: CategoryGetListDataRO[];
}

export class CategoryGetDetailRO {
  id: number;
  name: string;
  description: string;
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
