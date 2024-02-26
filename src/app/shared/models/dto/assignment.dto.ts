import { PaginateDTO } from './paginate.dto';

export class AssignmentStoreDTO {
  name: string;
  description: string;
  dueDate: string;
  lessonId?: number;
  courseId?: number;
}

export class AssignmentGetListDTO extends PaginateDTO {
  lessonId?: number;
  courseId?: number;
  createdBy?: number;
}

export class AssignmentUpdateDTO {
  name: string;
  description: string;
  dueDate: string;
}
