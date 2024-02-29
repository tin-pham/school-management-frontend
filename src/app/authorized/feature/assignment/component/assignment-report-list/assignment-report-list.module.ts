import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentReportListComponent } from './assignment-report-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentReportListComponent],
  exports: [AssignmentReportListComponent],
})
export class AssignmentReportListModule {}
