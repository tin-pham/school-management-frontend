import { PaginateDTO } from './paginate.dto';

export class CourseStoreDTO {
  name: string;
  description?: string;
  categoryIds?: number[];
  levelId: number;
  hours: number;
}

export class CourseGetListDTO extends PaginateDTO {
  userId?: number;
  categoryId?: number;
  withAssignmentCount?: boolean;
}

export class CourseGetDetailDTO {
  withCategoryIds?: boolean;
}

export class CourseUpdateDTO {
  name?: string;
  description?: string;
  categoryIds: number[];
  levelId: number;
  hours?: number;
}

export class CourseTeacherGetListDTO extends PaginateDTO {}
