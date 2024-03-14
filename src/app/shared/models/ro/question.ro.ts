import { PaginateRO } from './paginate.ro';

export class QuestionStoreRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
}

export class QuestionGetListOptionRO {
  id: number;
  text: string;
  isCorrect: boolean;
}

export class QuestionGetListDataRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
  options: QuestionGetListOptionRO[];
}

export class QuestionGetListRO extends PaginateRO<QuestionGetListDataRO> {
  data: QuestionGetListDataRO[];
}

export class QuestionGetDetailOptionRO {
  id?: number;
  text: string;
  isCorrect: boolean;
}

export class QuestionGetDetailRO {
  id: number;
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean;
  options: QuestionGetDetailOptionRO[];
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

export class QuestionStudentGetListDataOptionRO {
  id: number;
  text: string;
}

export class QuestionStudentGetListDataRO {
  id: number;
  text: string;
  difficultyId: number;
  difficultyName: string;
  isMultipleChoice: boolean;
  options: QuestionStudentGetListDataOptionRO[];
}

export class QuestionStudentGetListRO extends PaginateRO<QuestionStudentGetListDataRO> {
  data: QuestionStudentGetListDataRO[];
}
