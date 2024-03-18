export class StudentExerciseGradeCalculateRO {
  id: number;
  point: number;
  totalCount: number;
  correctCount: number;
  studentExerciseId: number;

  constructor(data?: StudentExerciseGradeCalculateRO) {
    Object.assign(this, data);
  }
}

export class StudentExerciseGradeDeleteRO {
  id: number;

  constructor(data?: StudentExerciseGradeDeleteRO) {
    Object.assign(this, data);
  }
}
