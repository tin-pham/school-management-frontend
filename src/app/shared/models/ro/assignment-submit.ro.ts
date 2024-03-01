import { PaginateRO } from './paginate.ro';

export class AssignmentSubmitGetListDataRO {
  id: number;
  attachmentUrl: string;
  attachmentName: string;
  attachmentCreatedAt: string;
  attachmentCreatedBy: number;
  studentName: string;
}

export class AssignmentSubmitGetListRO extends PaginateRO<AssignmentSubmitGetListDataRO> {
  data: AssignmentSubmitGetListDataRO[];
}

export class AssignmentSubmitGetStatisticRO {
  submitCount: number;
  correctCount: number;
  lateCount: number;
  missingCount: number;
}
