import { PaginateDTO } from './paginate.dto';

export class QuestionCategoryStoreDTO {
  name: string;
}

export class QuestionCategoryGetListDTO extends PaginateDTO {
  excludeByExerciseId?: number;

  constructor(data?: QuestionCategoryGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class QuestionCategoryUpdateDTO {
  name: string;
}
