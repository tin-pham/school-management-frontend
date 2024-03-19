import { PaginateDTO } from './paginate.dto';

export class ExerciseQuestionSnapshotGetListDTO extends PaginateDTO {
  exerciseId?: number;

  constructor(data?: ExerciseQuestionSnapshotGetListDTO) {
    super(data);
    Object.assign(this, data);
  }
}
