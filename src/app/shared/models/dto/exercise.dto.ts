import { PaginateDTO } from './paginate.dto';

export class ExerciseStoreDTO {
  name: string;
  difficultyId: number;
  lessonId: number;
  time?: number;
  dueDate?: string;
  instantMark: boolean;
}

export class ExerciseGetListDTO extends PaginateDTO {
  lessonId?: number;
}

export class ExerciseUpdateDTO {
  name: string;
  isActive: boolean;
  time?: number;
  dueDate?: Date;
}
