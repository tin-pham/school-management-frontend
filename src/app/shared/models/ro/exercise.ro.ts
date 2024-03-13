import { PaginateRO } from './paginate.ro';

export class ExerciseStoreRO {
  id: number;
  name: string;
  difficultyId: number;
  lessonId: number;

  constructor(data?: ExerciseStoreRO) {
    Object.assign(this, data);
  }
}

export class ExerciseGetListDataRO {
  id: number;
  name: string;
  difficultyId: number;
  difficultyName: string;
  submissionId: number;
}

export class ExerciseGetListRO extends PaginateRO<ExerciseGetListDataRO> {
  data: ExerciseGetListDataRO[];
}

export class ExerciseGetDetailRO {
  id: number;
  name: string;
  difficultyName: string;
  difficultyId: number;
}

export class ExerciseUpdateRO {
  id: number;
  name: string;
}

export class ExerciseDeleteRO {
  id: number;
}
