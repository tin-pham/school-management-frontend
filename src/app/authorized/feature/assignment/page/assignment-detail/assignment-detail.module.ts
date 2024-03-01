import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AttachmentService } from '@core/services/api/attachment.service';
import { AssignmentReportModule } from '@features/assignment/container/assignment-report/assignment-report.module';
import { AssignmentSubmitBoxModule } from '@features/assignment/container/assignment-submit-box/assignment-submit-box.module';
import { AssignmentDetailComponent } from './assignment-detail.component';
import { AssignmentDetailRoutingModule } from './assignment-detail-routing.module';

@NgModule({
  declarations: [AssignmentDetailComponent],
  imports: [AssignmentDetailRoutingModule, SharedModule, AssignmentReportModule, AssignmentSubmitBoxModule],
  providers: [AssignmentService, AttachmentService],
})
export class AssignmentDetailModule {}
