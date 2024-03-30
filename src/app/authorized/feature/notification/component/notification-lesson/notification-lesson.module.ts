import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationLessonComponent } from './notification-lesson.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NotificationLessonComponent],
  exports: [NotificationLessonComponent],
})
export class NotificationLessonModule {}
