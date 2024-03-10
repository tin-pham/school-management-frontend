import { PaginateDTO } from './paginate.dto';

export class QuestionCategoryStoreDTO {
  name: string;
}

export class QuestionCategoryGetListDTO extends PaginateDTO {}

export class QuestionCategoryUpdateDTO {
  name: string;
}
