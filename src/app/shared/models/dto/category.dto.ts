import { PaginateDTO } from './paginate.dto';

export class CategoryGetListDTO extends PaginateDTO {
  withCourse?: boolean;
  withCourseCount?: boolean;
  search?: string;
}
