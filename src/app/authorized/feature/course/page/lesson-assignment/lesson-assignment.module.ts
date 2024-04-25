import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentItemModule } from '@features/assignment/component/assignment-item/assignment-item.module';
import { LessonService } from '@core/services/api/lesson.service';
import { LessonAssignmentComponent } from './lesson-assignment.component';
import { LessonAssignmentRoutingModule } from './lesson-assignment-routing.module';

@NgModule({
  declarations: [LessonAssignmentComponent],
  imports: [LessonAssignmentRoutingModule, SharedModule, AssignmentItemModule],
  providers: [AssignmentService, LessonService],
})
export class LessonAssignmentModule {}
