import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { ExerciseUpdateDTO } from '@shared/models/dto/exercise.dto';
import { ExerciseGetDetailRO } from '@shared/models/ro/exercise.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-exercise-edit',
  styleUrls: ['exercise-edit.component.scss'],
  templateUrl: 'exercise-edit.component.html',
})
export class ExerciseEditComponent implements OnInit {
  exercise: ExerciseGetDetailRO;
  exerciseId: number;
  haveDueDate: boolean;
  difficulties: ISelectOption[];

  dto: ExerciseUpdateDTO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _exerciseService: ExerciseService,
    private _difficultyService: DifficultyService,
  ) {}

  ngOnInit() {
    this.exerciseId = this.route.snapshot.params['id'];
    this._exerciseService.getDetail(this.exerciseId).subscribe(response => {
      this.exercise = response;
      this.dto = this.exercise;
    });
    this._difficultyService.getList().subscribe(response => {
      this.difficulties = response.data.map(difficulty => ({
        label: difficulty.name,
        value: difficulty.id,
      }));
    });
  }

  update() {
    this._exerciseService.update(this.exerciseId, this.dto).subscribe(() => {
      this.toast.success('Sửa bài trắc nghiệm thành công');
      window.history.back();
    });
  }

  haveDueDateChange(checked: boolean): void {
    this.haveDueDate = checked;
    if (this.haveDueDate) {
      this.dto.dueDate = new Date();
    } else {
      delete this.dto.dueDate;
    }
  }
}
