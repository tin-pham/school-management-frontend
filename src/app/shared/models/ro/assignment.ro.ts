import { PaginateRO } from './paginate.ro';

export class AssignmentStoreRO {
  id: number;
  name: string;
  dueDate: Date;

  constructor(data?: AssignmentStoreRO) {
    Object.assign(this, data);
  }
}

export class AssignmentUpdateRO {
  id: number;
  name: string;
  dueDate: Date;

  constructor(data?: AssignmentStoreRO) {
    Object.assign(this, data);
  }
}

export class AssignmentGetListDataRO {
  id: number;
  name: string;
  dueDate: Date;
  submissionId?: number;
  submissionDate?: Date;
  submissionGrade?: number;
}

export class AssignmentGetListRO extends PaginateRO<AssignmentGetListDataRO> {
  override data: AssignmentGetListDataRO[];
}

export class AssignmentGetDetailRO {
  id: number;
  name: string;
  description: object;
  dueDate: string;
  createdByDisplayName: string;
  createdBy: number;
  submissionId?: number;
  submissionDate?: Date;
  submissionGrade?: number;
  submissionMessage?: string;
  lessonId?: number;
  lessonTitle?: string;
  sectionId?: number;
  courseId?: number;

  constructor(data?: AssignmentGetDetailRO) {
    Object.assign(this, data);
  }
}

export class AssignmentDeleteRO {
  id: number;

  constructor(data?: AssignmentDeleteRO) {
    Object.assign(this, data);
  }
}

export class AssignmentGetSubmissionRO {
  id: number;
  attachmentUrl: string;
  attachmentName: string;
  attachmentCreatedAt: Date;
  attachmentCreatedBy: number;
}

export class AssignmentGetMyListDataRO {
  id: number;
  name: string;
  description: object;
  dueDate: Date;
}

export class AssignmentGetMyListRO extends PaginateRO<AssignmentGetMyListDataRO> {
  data: AssignmentGetMyListDataRO[];
}
