import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseFilterStudentComponent } from './exercise-filter-student.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseFilterStudentComponent],
  providers: [],
  exports: [ExerciseFilterStudentComponent],
})
export class ExerciseFilterStudentModule {}
