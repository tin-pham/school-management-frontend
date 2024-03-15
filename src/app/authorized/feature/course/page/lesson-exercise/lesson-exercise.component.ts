import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { ExerciseGetListDTO } from '@shared/models/dto/exercise.dto';
import { ExerciseGetListDataRO, ExerciseGetListRO } from '@shared/models/ro/exercise.ro';

@Component({
  selector: 'app-lesson-exercise',
  styleUrls: ['lesson-exercise.component.scss'],
  templateUrl: 'lesson-exercise.component.html',
})
export class LessonExerciseComponent implements OnInit {
  lessonId: number;
  exercises: ExerciseGetListDataRO[];
  isActive = true;

  itemsPerPage = 5;
  page = 1;
  totalItems = 0;

  exerciseGetListOptions: ISelectOption[] = [
    {
      label: 'Chưa kích hoạt',
      value: false,
    },
    {
      label: 'Đã kích hoạt',
      value: true,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private _exerciseService: ExerciseService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.lessonId = +this.route.snapshot.paramMap.get('lessonId');
    this.loadExercises(this.getDto());
  }

  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadExercises(this.getDto());
  }

  handleFilterChange(isActive: boolean) {
    this.page = 1;
    this.isActive = isActive;
    this.loadExercises(this.getDto());
  }

  loadExercises(dto: ExerciseGetListDTO) {
    this._exerciseService.getList(dto).subscribe({
      next: (response: ExerciseGetListRO) => {
        this.totalItems = response.meta.totalItems;
        this.exercises = response.data;
        this.cd.markForCheck(); // Prefer markForCheck over detectChanges for performance
      },
    });
  }

  delete(id: number) {
    this._exerciseService.delete(id).subscribe({
      next: () => {
        this.loadExercises(this.getDto());
      },
    });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  getDto() {
    const exerciseGetListDto = new ExerciseGetListDTO({
      limit: this.itemsPerPage,
      page: this.page,
      lessonId: this.lessonId,
      isActive: this.isActive,
    });
    return exerciseGetListDto;
  }
}
