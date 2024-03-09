import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { ExerciseStoreDTO } from '@shared/models/dto/exercise.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-exercise-create',
  styleUrls: ['exercise-create.component.scss'],
  templateUrl: 'exercise-create.component.html',
})
export class ExerciseCreateComponent implements OnInit {
  difficulties: ISelectOption[] = [];
  dto = new ExerciseStoreDTO();

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _difficultyService: DifficultyService,
    private _exerciseService: ExerciseService,
  ) {}

  ngOnInit() {
    this.dto.lessonId = +this.route.snapshot.queryParamMap.get('lessonId');
    this._difficultyService.getList().subscribe(response => {
      this.difficulties = response.data.map(difficulty => ({ label: difficulty.name, value: difficulty.id }));
    });
  }

  store() {
    this._exerciseService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo bài tập trắc nghiệm thành công');
      window.history.back();
    });
  }
}
