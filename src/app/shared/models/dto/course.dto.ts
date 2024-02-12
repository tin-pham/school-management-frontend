import { PaginateDTO } from './paginate.dto';

export class CourseGetListDTO extends PaginateDTO {
  studentId?: string;
  categoryId?: number;
}

export class CourseGetDetailDTO {
  withCategoryIds?: boolean;
}

export class CourseStoreDTO {
  name: string;
  description?: string;
  imageUrl?: string;
  categoryIds?: number[];

  constructor(data?: CourseStoreDTO) {
    Object.assign(this, data);
  }
}

export class CourseUpdateDTO {
  name?: string;
  description?: string;
  imageUrl?: string;
  constructor(data?: CourseUpdateDTO) {
    Object.assign(this, data);
  }
}
