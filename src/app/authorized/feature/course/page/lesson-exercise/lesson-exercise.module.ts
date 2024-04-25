import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExerciseItemModule } from '@features/exercise/component/exercise-item/exercise-item.module';
import { ExerciseService } from '@core/services/api/exercise.service';
import { ExerciseFilterStudentModule } from '@features/exercise/component/exercise-filter-student/exercise-filter-student.module';
import { ExerciseFilterTeacherModule } from '@features/exercise/component/exercise-filter-teacher/exercise-filter-teacher.module';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonExerciseComponent } from './lesson-exercise.component';
import { LessonExerciseRoutingModule } from './lesson-exercise-routing.module';

@NgModule({
  declarations: [LessonExerciseComponent],
  imports: [LessonExerciseRoutingModule, SharedModule, ExerciseItemModule, ExerciseFilterStudentModule, ExerciseFilterTeacherModule],
  providers: [ExerciseService, LessonService],
})
export class LessonExerciseModule {}
