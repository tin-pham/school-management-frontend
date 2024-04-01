import { PaginateDTO } from './paginate.dto';

export class PostStoreDTO {
  content: object;
  courseId: number;
}

export class PostUpdateDTO {
  content: object;
}

export class PostGetListDTO extends PaginateDTO {
  courseId: number;
}
