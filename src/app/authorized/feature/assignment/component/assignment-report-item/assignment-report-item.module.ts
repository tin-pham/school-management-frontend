import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentReportItemComponent } from './assignment-report-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentReportItemComponent],
  exports: [AssignmentReportItemComponent],
})
export class AssignmentReportItemModule {}
