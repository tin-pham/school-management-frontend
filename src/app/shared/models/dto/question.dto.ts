import { PaginateDTO } from './paginate.dto';

export class QuestionStoreOptionDTO {
  text: string;
  isCorrect: boolean = false;
}

export class QuestionStoreDTO {
  text: string;
  difficultyId: number;
  isMultipleChoice: boolean = false;
  questionCategoryIds?: number[];
  options?: QuestionStoreOptionDTO[];
}

export class QuestionGetListDTO extends PaginateDTO {
  questionCategoryId?: number;
}

export class QuestionUpdateDTO {
  text?: string;
  difficultyId?: number;
  questionCategoryIds?: number[];
  isMultipleChoice?: boolean;
}
