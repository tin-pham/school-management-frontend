import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { FileSubmissionModule } from '@features/assignment/component/file-submission/file-submission.module';
import { AssignmentSubmitBoxComponent } from './assignment-submit-box.component';

@NgModule({
  imports: [SharedModule, FileSubmissionModule],
  declarations: [AssignmentSubmitBoxComponent],
  providers: [AssignmentSubmitService, AssignmentService],
  exports: [AssignmentSubmitBoxComponent],
})
export class AssignmentSubmitBoxModule {}
