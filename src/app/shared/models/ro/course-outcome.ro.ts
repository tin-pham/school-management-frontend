export class CourseOutcomeGetListDataRO {
  id: number;
  name: string;
}

export class CourseOutcomeGetListRO {
  data: CourseOutcomeGetListDataRO[];
}

export class CourseOutcomeStoreRO {
  id: number;
  name: string;
  courseId: number;
}

export class CourseOutcomeUpdateRO {
  id: number;
  name: string;
  courseId: number;
}

export class CourseOutcomeDeleteRO {
  id: number;
}
