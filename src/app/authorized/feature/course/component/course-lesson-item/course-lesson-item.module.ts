import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseLessonItemComponent } from './course-lesson-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseLessonItemComponent],
  exports: [CourseLessonItemComponent],
})
export class CourseLessonItemModule {}
