export class CourseStudentBulkStoreDTO {
  courseIds: number[];
  studentIds: string[];
}

export class CourseStudentBulkDeleteDTO {
  courseIds: number[];
  studentIds: string[];
}

export class CourseStudentCheckRegisteredDTO {
  courseId: number;
}

export class CourseStudentIsRegisteredDTO {
  courseId: number;
}

export class CourseStudentRegisterDTO {
  courseId: number;
  constructor(data: CourseStudentRegisterDTO) {
    Object.assign(this, data);
  }
}

export class CourseStudentUnRegisterDTO {
  courseId: number;
}
