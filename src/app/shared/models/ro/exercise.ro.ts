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
  studentExerciseId: number;
  isStartDoing: boolean;
  startDoingAt: Date;
  time: number;
  dueDate: Date;
  studentExerciseGradeId: number;
  point?: number;
  totalCount?: number;
  correctCount?: number;
}

export class ExerciseGetListRO extends PaginateRO<ExerciseGetListDataRO> {
  data: ExerciseGetListDataRO[];
}

export class ExerciseGetDetailRO {
  id: number;
  name: string;
  difficultyName: string;
  difficultyId: number;
  isActive: boolean;
  activatedAt: Date;
  time: number;
  dueDate: Date;
  studentId: string;
  studentExerciseId: number;
  isStartDoing: boolean;
  startDoingAt: Date;
  isSubmitted: boolean;
  point?: number;
  totalCount?: number;
  correctCount?: number;
  studentExerciseGradeId: number;
  instantMark: boolean;
  isGraded: boolean;
  allowRedo: boolean;
  basePoint: number;
}

export class ExerciseUpdateRO {
  id: number;
  name: string;
  isActive: boolean;
  activatedAt: Date;
  time?: number;
  dueDate?: Date;
  allowRedo?: boolean;
  instantMark?: boolean;
  difficultyId: number;
}

export class ExerciseDeleteRO {
  id: number;
}
