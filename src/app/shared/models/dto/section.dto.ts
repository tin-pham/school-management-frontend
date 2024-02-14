export class SectionStoreDTO {
  name: string;
  courseId: number;

  constructor(data?: SectionStoreDTO) {
    Object.assign(this, data);
  }
}

export class SectionGetListDTO {
  courseId: number;
  withLesson?: boolean;
}

export class SectionGetDetailDTO {
  withLesson?: boolean;
}

export class SectionUpdateDTO {
  name?: string;
}
