import { PaginateDTO } from './paginate.dto';

export class NotificationStoreDTO {
  title: string;
  content: string;
  courseId: number;
  commentId: number;

  constructor(data?: NotificationStoreDTO) {
    Object.assign(this, data);
  }
}

export class NotificationGetListDTO extends PaginateDTO {
  courseId?: number;
  byUser?: boolean;
  withRead?: boolean;
}
