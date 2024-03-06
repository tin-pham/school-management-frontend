import { PaginateDTO } from './paginate.dto';

export class CourseGetListDTO extends PaginateDTO {
  userId?: number;
  categoryId?: number;
  withAssignmentCount?: boolean;
}

export class CourseGetDetailDTO {
  withCategoryIds?: boolean;
}

export class CourseStoreDTO {
  name: string;
  description?: string;
  categoryIds?: number[];

  constructor(data?: CourseStoreDTO) {
    Object.assign(this, data);
  }
}

export class CourseUpdateDTO {
  name?: string;
  description?: string;
  constructor(data?: CourseUpdateDTO) {
    Object.assign(this, data);
  }
}
