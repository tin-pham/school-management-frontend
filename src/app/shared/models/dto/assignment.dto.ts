import { PaginateDTO } from './paginate.dto';

export class AssignmentStoreDTO {
  name: string;
  description: object;
  dueDate: Date;
  lessonId?: number;
  courseId?: number;
  exerciseIds?: number[];
}

export class AssignmentGetListDTO extends PaginateDTO {
  lessonId?: number;
  courseId?: number;
  withSubmission?: boolean;

  constructor(data?: AssignmentGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class AssignmentUpdateDTO {
  name: string;
  description: object;
  dueDate: string;
}

export class AssignmentGetMyListDTO extends PaginateDTO {}
