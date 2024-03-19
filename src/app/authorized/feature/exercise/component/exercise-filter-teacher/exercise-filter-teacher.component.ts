import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ExerciseGetListDTO } from '@shared/models/dto/exercise.dto';

@Component({
  selector: 'app-exercise-filter-teacher',
  styleUrls: ['exercise-filter-teacher.component.scss'],
  templateUrl: 'exercise-filter-teacher.component.html',
})
export class ExerciseFilterTeacherComponent {
  dto = new ExerciseGetListDTO();
  filterOptions = [
    {
      label: 'Chưa kích hoạt',
      setValue: () => {
        this.dto.isActive = false;
      },
    },
    {
      label: 'Đã kích hoạt',
      setValue: () => {
        this.dto.isActive = true;
      },
    },
  ];

  @Output() onFilter = new EventEmitter<ExerciseGetListDTO>();
  filter(event: MatSelectChange) {
    const selectedOption = event.value;

    delete this.dto.isActive;

    selectedOption.setValue();
    this.onFilter.emit(this.dto);
  }
}
