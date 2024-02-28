import { PaginateDTO } from './paginate.dto';

export class AssignmentSubmitStoreDTO {
  file: File;
  assignmentId: number;

  constructor(data: AssignmentSubmitStoreDTO) {
    Object.assign(this, data);
  }
}

export class AssignmentSubmitGetListDTO extends PaginateDTO {
  assignmentId?: number;
}
