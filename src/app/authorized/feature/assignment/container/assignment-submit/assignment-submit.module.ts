import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FileSubmissionModule } from '../file-submission/file-submission.module';
import { AssignmentSubmitComponent } from './assignment-submit.component';

@NgModule({
  imports: [SharedModule, FileSubmissionModule],
  declarations: [AssignmentSubmitComponent],
  exports: [AssignmentSubmitComponent],
})
export class AssignmentSubmitModule {}
