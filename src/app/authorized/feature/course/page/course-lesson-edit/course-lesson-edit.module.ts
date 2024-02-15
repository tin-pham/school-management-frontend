import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonFormModule } from '../../container/lesson-form/lesson-form.module';
import { CourseLessonEditComponent } from './course-lesson-edit.component';
import { CourseLessonEditRoutingModule } from './course-lesson-edit-routing.module';

@NgModule({
  declarations: [CourseLessonEditComponent],
  imports: [CourseLessonEditRoutingModule, SharedModule, LessonFormModule],
  providers: [LessonService],
})
export class CourseLessonEditModule {}
