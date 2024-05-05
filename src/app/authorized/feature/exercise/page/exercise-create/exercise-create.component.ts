import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CacheForm } from '@core/base/cache-form.base';
import { DifficultyService } from '@core/services/api/difficulty.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { CacheStorageService } from '@core/services/cache.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { ExerciseStoreDTO } from '@shared/models/dto/exercise.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-exercise-create',
  styleUrls: ['exercise-create.component.scss'],
  templateUrl: 'exercise-create.component.html',
})
export class ExerciseCreateComponent extends CacheForm<ExerciseStoreDTO> implements OnInit {
  difficulties: ISelectOption[] = [];
  dto = new ExerciseStoreDTO();
  haveDueDate: boolean;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    _cacheService: CacheStorageService,
    private _difficultyService: DifficultyService,
    private _exerciseService: ExerciseService,
  ) {
    super(_cacheService, 'exercise-create');
  }

  ngOnInit() {
    this.dto.lessonId = +this.route.snapshot.queryParamMap.get('lessonId');
    this.dto.instantMark = false;
    this.dto.allowRedo = false;
    this._difficultyService.getList().subscribe(response => {
      this.difficulties = response.data.map(difficulty => ({ label: difficulty.name, value: difficulty.id }));
    });
  }

  store() {
    this._exerciseService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo bài tập trắc nghiệm thành công');
      this.clearForm();
      window.history.back();
    });
  }

  clearForm(): void {
    this.dto = new ExerciseStoreDTO();
    this.removeCache();
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
