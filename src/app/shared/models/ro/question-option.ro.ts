import { PaginateRO } from './paginate.ro';

export class QuestionOptionStoreRO {
  id: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export class QuestionOptionGetListDataRO {
  id: number;
  text: string;
  questionId: number;
  isCorrect: boolean;
}

export class QuestionOptionGetListRO extends PaginateRO<QuestionOptionGetListDataRO> {
  data: QuestionOptionGetListDataRO[];
}

export class QuestionOptionGetDetailRO {
  id: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export class QuestionOptionUpdateRO {
  id: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export class QuestionOptionDeleteRO {
  id: number;
}
