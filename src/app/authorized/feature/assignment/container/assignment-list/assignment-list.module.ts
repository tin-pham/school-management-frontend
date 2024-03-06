import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentItemModule } from '@features/assignment/component/assignment-item/assignment-item.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentListComponent } from './assignment-list.component';

@NgModule({
  imports: [SharedModule, AssignmentItemModule],
  declarations: [AssignmentListComponent],
  providers: [AssignmentService],
  exports: [AssignmentListComponent],
})
export class AssignmentListModule {}
