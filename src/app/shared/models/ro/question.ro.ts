import { PaginateRO } from './paginate.ro';

export class QuestionStoreRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
}

export class QuestionGetListDataRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
}

export class QuestionGetListRO extends PaginateRO<QuestionGetListDataRO> {
  data: QuestionGetListDataRO[];
}

export class QuestionGetDetailRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
}

export class QuestionUpdateRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
}

export class QuestionDeleteRO {
  id: number;
}
