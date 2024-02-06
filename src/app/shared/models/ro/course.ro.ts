import { PaginateRO } from './paginate.ro';

export class CourseStoreRO {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export class CourseUpdateRO {
  name?: string;
  description?: string;
  imageUrl?: string;
}
