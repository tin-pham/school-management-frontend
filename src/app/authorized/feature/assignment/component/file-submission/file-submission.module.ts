import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { FileSubmissionComponent } from './file-submission.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FileSubmissionComponent, TruncatePipe],
  exports: [FileSubmissionComponent],
})
export class FileSubmissionModule {}
