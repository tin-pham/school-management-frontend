import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonFormModule } from '../../container/lesson-form/lesson-form.module';
import { CourseLessonCreateComponent } from './course-lesson-create.component';
import { CourseLessonCreateRoutingModule } from './course-lesson-create-routing.module';

@NgModule({
  declarations: [CourseLessonCreateComponent],
  imports: [CourseLessonCreateRoutingModule, SharedModule, LessonFormModule],
  providers: [LessonService],
})
export class CourseLessonCreateModule {}
