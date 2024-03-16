import { PaginateRO } from './paginate.ro';

export class ExerciseQuestionSnapshotGetListOptionRO {
  id: number;
  text: string;
  isCorrect: boolean;
  isChosen: boolean;
}

export class ExerciseQuestionSnapshotGetListDataRO {
  id: number;
  text: string;
  difficultyId: number;
  difficultyName: string;
  isMultipleChoice: boolean;
  options: ExerciseQuestionSnapshotGetListOptionRO[];
}

export class ExerciseQuestionSnapshotGetListRO extends PaginateRO<ExerciseQuestionSnapshotGetListDataRO> {
  data: ExerciseQuestionSnapshotGetListDataRO[];
}
