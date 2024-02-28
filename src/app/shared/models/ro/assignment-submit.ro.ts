import { PaginateRO } from './paginate.ro';

export class AssignmentSubmitGetListDataRO {
  id: number;
  attachmentUrl: string;
  attachmentName: string;
  attachmentCreatedAt: string;
}

export class AssignmentSubmitGetListRO extends PaginateRO<AssignmentSubmitGetListDataRO> {
  data: AssignmentSubmitGetListDataRO[];
}
