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

export class ExerciseGetDetailQuestionOptionRO {
  id: number;
  text: string;
  isCorrect: boolean;
}

export class ExerciseGetDetailQuestionRO {
  id: number;
  text: string;
  options: ExerciseGetDetailQuestionOptionRO[];
}

export class ExerciseGetDetailDifficultyRO {
  id: number;
  name: string;
}

export class ExerciseGetDetailRO {
  id: number;
  name: string;
  difficulty: ExerciseGetDetailDifficultyRO;
  questions: ExerciseGetDetailQuestionRO[];
}

export class ExerciseUpdateRO {
  id: number;
  name: string;
}

export class ExerciseDeleteRO {
  id: number;
}
