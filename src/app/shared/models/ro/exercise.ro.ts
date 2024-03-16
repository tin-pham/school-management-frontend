import { PaginateRO } from './paginate.ro';

export class ExerciseStoreRO {
  id: number;
  name: string;
  difficultyId: number;
  lessonId: number;
  time: number;
  dueDate: Date;

  constructor(data?: ExerciseStoreRO) {
    Object.assign(this, data);
  }
}

export class ExerciseGetListDataRO {
  id: number;
  name: string;
  difficultyId: number;
  difficultyName: string;
  isSubmitted?: boolean;
  submissionDate?: Date;
  isSubmissionLate?: boolean;
  isActive: number;
  activatedAt: Date;
  time: number;
  dueDate: Date;
}

export class ExerciseGetListRO extends PaginateRO<ExerciseGetListDataRO> {
  data: ExerciseGetListDataRO[];
}

export class ExerciseGetDetailRO {
  id: number;
  name: string;
  difficultyName: string;
  difficultyId: number;
  isActive: number;
  activatedAt: Date;
  time: number;
  dueDate: Date;
  studentId: string;
  studentExerciseId: number;
  isSubmitted: boolean;
  point?: number;
  totalCount?: number;
  correctCount?: number;
  studentExerciseGradeId: number;
}

export class ExerciseUpdateRO {
  id: number;
  name: string;
  isActive: boolean;
  activatedAt: Date;
  time?: number;
  dueDate?: Date;
}

export class ExerciseDeleteRO {
  id: number;
}
