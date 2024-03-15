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
