import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { S3Service } from '@core/services/api/s3.service';
import { LessonAttachmentService } from '@core/services/api/lesson-attachment.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentItemModule } from '@features/assignment/component/assignment-item/assignment-item.module';
import { LessonAssignmentComponent } from './lesson-assignment.component';
import { LessonAssignmentRoutingModule } from './lesson-assignment-routing.module';

@NgModule({
  declarations: [LessonAssignmentComponent],
  imports: [LessonAssignmentRoutingModule, SharedModule, AssignmentItemModule],
  providers: [S3Service, LessonAttachmentService, AssignmentService],
})
export class LessonAssignmentModule {}
