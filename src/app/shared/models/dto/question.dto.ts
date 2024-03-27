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
  exerciseId?: number;
  excludeExerciseId?: number;
  difficultyId?: number;
}

export class QuestionStudentGetListDTO extends PaginateDTO {
  exerciseId?: number;

  constructor(data?: QuestionStudentGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class QuestionUpdateOptionRO {
  isCorrect: boolean;
  text: string;
}

export class QuestionUpdateDTO {
  text?: string;
  difficultyId?: number;
  questionCategoryIds?: number[];
  isMultipleChoice?: boolean;
  options: QuestionUpdateOptionRO[];
  removeOptionIds?: number[];
}
