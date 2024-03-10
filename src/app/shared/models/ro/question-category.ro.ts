import { PaginateRO } from './paginate.ro';

export class QuestionCategoryStoreRO {
  id: number;
  name: string;

  constructor(data?: QuestionCategoryStoreRO) {
    Object.assign(this, data);
  }
}

export class QuestionCategoryGetListDataRO {
  id: number;
  name: string;
  questionCount: number;
}

export class QuestionCategoryGetListRO extends PaginateRO<QuestionCategoryGetListDataRO> {
  data: QuestionCategoryGetListDataRO[];
}

export class QuestionCategoryGetDetailRO {
  id: number;
  name: string;

  constructor(data?: QuestionCategoryGetDetailRO) {
    Object.assign(this, data);
  }
}

export class QuestionCategoryUpdateRO {
  id: number;
  name: string;

  constructor(data?: QuestionCategoryGetDetailRO) {
    Object.assign(this, data);
  }
}

export class QuestionCategoryDeleteRO {
  id: number;

  constructor(data?: QuestionCategoryDeleteRO) {
    Object.assign(this, data);
  }
}
