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
  isRead?: boolean;
  commentId?: number;
  commentParentId?: number;
  commentOwnerId?: number;
  commentOwnerDisplayName?: string;
  commentOwnerUsername?: string;
  commentOwnerImageUrl?: string;
  studentExerciseNotificationId?: number;
  exerciseSubmitId?: number;
  assignmentSubmitNotificationId?: number;
  assignmentId?: number;
  assignmentName: string;
  lessonId: number;
  sectionId: number;
  assignmentNotificationId: number;
  exerciseId: number;
  exerciseName: number;
  postNotificationId: number;
  postId: number;
}

export class NotificationGetListRO extends PaginateRO<NotificationGetListDataRO> {
  data: NotificationGetListDataRO[];
}
