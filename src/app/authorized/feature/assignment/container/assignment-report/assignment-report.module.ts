import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentReportHeaderModule } from '@features/assignment/component/assignment-report-header/assignment-report-header.module';
import { AssignmentReportListModule } from '@features/assignment/component/assignment-report-list/assignment-report-list.module';
import { AssignmentReportComponent } from './assignment-report.component';

@NgModule({
  imports: [SharedModule, AssignmentReportHeaderModule, AssignmentReportListModule],
  declarations: [AssignmentReportComponent],
  providers: [],
  exports: [AssignmentReportComponent],
})
export class AssignmentReportModule {}
