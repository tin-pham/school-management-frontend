import { PaginateDTO } from './paginate.dto';

export class QuestionStoreOptionDTO {
  text: string;
  isCorrect: boolean = false;
}

export class QuestionStoreDTO {
  text: string;
  difficultyId: number;
  questionCategoryIds?: number[];
  options?: QuestionStoreOptionDTO[];
}

export class QuestionGetListDTO extends PaginateDTO {
  questionCategoryId?: number;
  exerciseId?: number;
  excludeExerciseId?: number;
  difficultyId: number;
  withExerciseStudentOption?: boolean;
}

export class QuestionStudentGetListDTO extends PaginateDTO {
  exerciseId?: number;
  studentExerciseId?: number;
}

export class QuestionUpdateOptionCreateDTO {
  isCorrect: boolean;
  text: string;
}

export class QuestionUpdateOptionUpdateDataDTO {
  isCorrect?: boolean;
  text?: string;
}

export class QuestionUpdateOptionUpdateDTO {
  id: number;
  data: QuestionUpdateOptionUpdateDataDTO;
}

export class QuestionUpdateDTO {
  text?: string;
  difficultyId?: number;
  createOptions: QuestionUpdateOptionCreateDTO[];
  removeOptionIds: number[];
  updateOptions: QuestionUpdateOptionUpdateDTO[];
}
