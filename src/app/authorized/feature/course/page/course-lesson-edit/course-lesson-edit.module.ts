import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonService } from '@core/services/api/lesson.service';
import { CourseLessonEditComponent } from './course-lesson-edit.component';
import { CourseLessonEditRoutingModule } from './course-lesson-edit-routing.module';

@NgModule({
  declarations: [CourseLessonEditComponent],
  imports: [CourseLessonEditRoutingModule, SharedModule],
  providers: [LessonService],
})
export class CourseLessonEditModule {}
