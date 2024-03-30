import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationItemModule } from '@features/notification/component/notification-item/notification-item.module';
import { NotificationCommentModule } from '@features/notification/component/notification-comment/notification-comment.module';
import { NotificationExerciseModule } from '@features/notification/component/notification-exercise/notification-exercise.module';
import { NotificationLessonModule } from '@features/notification/component/notification-lesson/notification-lesson.module';
import { NotificationListComponent } from './notification-list.component';

const COMPONENTS = [NotificationListComponent];

@NgModule({
  imports: [SharedModule, NotificationItemModule, NotificationCommentModule, NotificationExerciseModule, NotificationLessonModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class NotificationListModule {}
