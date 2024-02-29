import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentReportHeaderComponent } from './assignment-report-header.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentReportHeaderComponent],
  exports: [AssignmentReportHeaderComponent],
})
export class AssignmentReportHeaderModule {}
