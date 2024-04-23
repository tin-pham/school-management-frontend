import { PaginateRO } from './paginate.ro';

export class StudentExerciseStoreRO {
  id: number;
  startDoingAt: Date;
}

export class StudentExerciseGetListSubmittedDataRO {
  id: number;
  studentId: string;
  exerciseId: number;
  isSubmitted: boolean;
  submittedAt: Date;
  isLate: boolean;
  userDisplayName: string;
  userImageUrl: string;
  userId: number;
  username: string;
  point: number;
  totalCount: number;
  correctCount: number;
}

export class StudentExerciseGetListSubmittedRO extends PaginateRO<StudentExerciseGetListSubmittedDataRO> {
  data: StudentExerciseGetListSubmittedDataRO[];
}
