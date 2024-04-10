import { PaginateDTO } from './paginate.dto';

export class CategoryGetListDTO extends PaginateDTO {
  withCourseCount?: boolean;
  search?: string;

  constructor(data?: CategoryGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class CategoryStoreDTO {
  name: string;
  description?: object;

  constructor(data?: CategoryStoreDTO) {
    Object.assign(this, data);
  }
}

export class CategoryUpdateDTO {
  name: string;
  description: object;

  constructor(data?: CategoryUpdateDTO) {
    Object.assign(this, data);
  }
}
