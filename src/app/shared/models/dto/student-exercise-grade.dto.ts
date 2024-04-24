export class StudentExerciseGradeCalculateDTO {
  studentExerciseId: number;
  basePoint: number;
}

export class StudentExerciseGradeBulkCalculateDTO {
  basePoint: number;
  exerciseId: number;
}

export class StudentExerciseGradeDeleteAllDTO {
  exerciseId: number;
}
