import { PaginateDTO } from './paginate.dto';

export class ExerciseStoreDTO {
  name: string;
  difficultyId: number;
  lessonId: number;
  time?: number;
  dueDate?: Date;
  instantMark: boolean;
}

export class ExerciseGetListDTO extends PaginateDTO {
  lessonId?: number;
  isActive?: boolean;
  includeGrade?: boolean;
  isSubmitted?: boolean;
  isMissing?: boolean;
  isLate?: boolean;

  constructor(data?: ExerciseGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}

export class ExerciseUpdateDTO {
  name: string;
  isActive: boolean;
  time?: number;
  dueDate?: Date;
}

export class ExerciseGetDetailDTO {
  includeGrade?: boolean;
}
