import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AttachmentService } from '@core/services/api/attachment.service';
import { AssignmentReportModule } from '@features/assignment/container/assignment-report/assignment-report.module';
import { AssignmentSubmitModule } from '../../container/assignment-submit/assignment-submit.module';
import { AssignmentDetailComponent } from './assignment-detail.component';
import { AssignmentDetailRoutingModule } from './assignment-detail-routing.module';

@NgModule({
  declarations: [AssignmentDetailComponent],
  imports: [AssignmentDetailRoutingModule, SharedModule, AssignmentSubmitModule, AssignmentReportModule],
  providers: [AssignmentService, AttachmentService],
})
export class AssignmentDetailModule {}
