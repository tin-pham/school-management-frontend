import { PaginateRO } from './paginate.ro';

export class AssignmentSubmitGetListDataRO {
  id: number;
  attachmentUrl: string;
  attachmentName: string;
  attachmentCreatedAt: string;
  attachmentCreatedBy: number;
  studentName: string;
  userImageUrl: string;
  grade: number;
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

export class AssignmentSubmitGetDetailRO {
  id: number;
  createdAt: Date;
  createdBy: number;
  assignemntCreatedBy: number;
  attachmentUrl: string;
  attachmentName: string;
  studentName: string;
  userImageUrl: string;
}

export class AssignmentSubmitGetGradeRO {
  id: number;
  message: string;
  grade: number;
  assignmentSubmitId: number;
}
