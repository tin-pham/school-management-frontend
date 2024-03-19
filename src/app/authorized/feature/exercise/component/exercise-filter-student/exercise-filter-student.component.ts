import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ExerciseGetListDTO } from '@shared/models/dto/exercise.dto';

@Component({
  selector: 'app-exercise-filter-student',
  styleUrls: ['exercise-filter-student.component.scss'],
  templateUrl: 'exercise-filter-student.component.html',
})
export class ExerciseFilterStudentComponent {
  dto = new ExerciseGetListDTO();
  filterOptions = [
    {
      label: 'Chưa làm',
      setValue: () => {
        this.dto.isMissing = true;
      },
    },
    {
      label: 'Đã nộp',
      setValue: () => {
        this.dto.isSubmitted = true;
      },
    },
    {
      label: 'Nộp trễ',
      setValue: () => {
        this.dto.isLate = true;
      },
    },
  ];

  @Output() onFilter = new EventEmitter<ExerciseGetListDTO>();
  filter(event: MatSelectChange) {
    const selectedOption = event.value;

    delete this.dto.isSubmitted;
    delete this.dto.isLate;
    delete this.dto.isMissing;

    selectedOption.setValue();
    this.onFilter.emit(this.dto);
  }
}
