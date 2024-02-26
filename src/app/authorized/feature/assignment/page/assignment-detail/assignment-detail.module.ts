import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AttachmentService } from '@core/services/api/attachment.service';
import { S3Service } from '@core/services/api/s3.service';
import { AssignmentSubmittedListModule } from '@features/assignment/container/assignment-submitted-list/assignment-submitted-list.module';
import { AssignmentSubmitModule } from '../../container/assignment-submit/assignment-submit.module';
import { AssignmentDetailComponent } from './assignment-detail.component';
import { AssignmentDetailRoutingModule } from './assignment-detail-routing.module';

@NgModule({
  declarations: [AssignmentDetailComponent],
  imports: [AssignmentDetailRoutingModule, SharedModule, AssignmentSubmitModule, AssignmentSubmittedListModule],
  providers: [AssignmentService, AttachmentService, S3Service],
})
export class AssignmentDetailModule {}
