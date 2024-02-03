import { PaginateRO } from './paginate.ro';

export class CategoryGetListDataRO {
  id: number;
  name: string;
  description: string;
}

export class CategoryGetListRO extends PaginateRO<CategoryGetListDataRO> {
  data: CategoryGetListDataRO[];
}
