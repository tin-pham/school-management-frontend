import { PaginateDTO } from './paginate.dto';

export class StudentExerciseStoreDTO {
  exerciseId: number;
}

export class StudentExerciseSubmitSnapshotQuestionDTO {
  id: number;
  snapshotOptionIds: number[];
}

export class StudentExerciseSubmitDTO {
  snapshotQuestions: StudentExerciseSubmitSnapshotQuestionDTO[];
}

export class StudentExerciseGetListSubmittedDTO extends PaginateDTO {
  exerciseId: number;
}

export class StudentExerciseBulkDeleteDTO {
  exerciseId: number;
}
