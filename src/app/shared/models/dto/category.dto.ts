import { PaginateDTO } from './paginate.dto';

export class CategoryGetListDTO extends PaginateDTO {
  withCourse?: boolean;
  withCourseCount?: boolean;
  search?: string;
}

export class CategoryStoreDTO {
  name: string;
  description?: string;

  constructor(data: CategoryStoreDTO) {
    Object.assign(this, data);
  }
}
