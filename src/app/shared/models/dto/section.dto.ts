export class SectionStoreDTO {
  name: string;
  courseId: number;
}

export class SectionGetListDTO {
  courseId: number;
  withLesson?: boolean;
}

export class SectionUpdateDTO {
  name?: string;
}
