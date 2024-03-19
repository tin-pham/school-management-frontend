import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseFilterTeacherComponent } from './exercise-filter-teacher.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ExerciseFilterTeacherComponent],
  providers: [],
  exports: [ExerciseFilterTeacherComponent],
})
export class ExerciseFilterTeacherModule {}
