import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { FileSubmissionModule } from '@features/assignment/component/file-submission/file-submission.module';
import { AssignmentSubmitComponent } from './assignment-submit.component';

@NgModule({
  imports: [SharedModule, FileSubmissionModule],
  declarations: [AssignmentSubmitComponent],
  providers: [AssignmentSubmitService, AssignmentService],
  exports: [AssignmentSubmitComponent],
})
export class AssignmentSubmitModule {}
