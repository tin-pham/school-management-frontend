import { PaginateDTO } from './paginate.dto';

export class QuestionOptionStoreDTO {
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export class QuestionOptionGetListDTO extends PaginateDTO {
  questionId: number;
}

export class QuestionOptionUpdateDTO {
  text?: string;
  isCorrect?: boolean;
}
