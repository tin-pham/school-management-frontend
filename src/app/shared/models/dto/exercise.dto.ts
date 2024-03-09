import { PaginateDTO } from './paginate.dto';

export class ExerciseStoreDTO {
  name: string;
  difficultyId: number;
  lessonId: number;
}

export class ExerciseGetListDTO extends PaginateDTO {
  lessonId?: number;
}

export class ExerciseUpdateDTO {
  name: string;
}
