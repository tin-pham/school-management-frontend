import { PaginateDTO } from './paginate.dto';

export class QuestionOptionStoreDTO {
  text: string;
  isCorrect: boolean;
  questionId?: number;

  constructor(data?: QuestionOptionStoreDTO) {
    Object.assign(this, data);
  }
}

export class QuestionOptionGetListDTO extends PaginateDTO {
  questionId: number;
}

export class QuestionOptionUpdateDTO {
  text?: string;
  isCorrect?: boolean;

  constructor(data?: QuestionOptionUpdateDTO) {
    Object.assign(this, data);
  }
}

export class QuestionOptionBulkUpdateDataDTO {
  id: number;
  dto: QuestionOptionUpdateDTO;
}

export class QuestionOptionBulkUpdateDTO {
  data: QuestionOptionBulkUpdateDataDTO[];
}
