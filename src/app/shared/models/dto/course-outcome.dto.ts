export class CourseOutcomeStoreDTO {
  name: string;
  courseId: number;

  constructor(dto: CourseOutcomeStoreDTO) {
    Object.assign(this, dto);
  }
}

export class CourseOutcomeUpdateDTO {
  name: string;
}

export class CourseOutcomeGetListDTO {
  courseId: number;
}
