import { PaginateRO } from './paginate.ro';

export class NotificationStoreRO {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

export class NotificationGetListDataRO {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  courseId?: number;
  courseName?: string;
  assignmentId?: number;
  isRead?: boolean;
  commentId?: number;
  commentParentId?: number;
  commentOwnerId?: number;
  commentOwnerDisplayName?: string;
  commentOwnerImageUrl?: string;
  studentExerciseNotificationId?: number;
  exerciseId?: number;
}

export class NotificationGetListRO extends PaginateRO<NotificationGetListDataRO> {
  data: NotificationGetListDataRO[];
}
