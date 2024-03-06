import { PaginateDTO } from './paginate.dto';

export class AssignmentStoreDTO {
  name: string;
  description: string;
  dueDate: string;
  lessonId?: number;
  courseId?: number;
  exerciseIds?: number[];
}

export class AssignmentGetListDTO extends PaginateDTO {
  lessonId?: number;
  courseId?: number;
  withSubmission?: boolean;
}

export class AssignmentUpdateDTO {
  name: string;
  description: string;
  dueDate: string;
}

export class AssignmentGetMyListDTO extends PaginateDTO {}
