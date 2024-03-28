import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentReportItemModule } from '../assignment-report-item/assignment-report-item.module';
import { AssignmentReportListComponent } from './assignment-report-list.component';

@NgModule({
  imports: [SharedModule, AssignmentReportItemModule],
  declarations: [AssignmentReportListComponent],
  exports: [AssignmentReportListComponent],
})
export class AssignmentReportListModule {}
