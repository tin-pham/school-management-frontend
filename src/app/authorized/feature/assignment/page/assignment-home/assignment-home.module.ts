import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentItemModule } from '@features/assignment/component/assignment-item/assignment-item.module';
import { AssignmentHomeComponent } from './assignment-home.component';
import { AssignmentHomeRoutingModule } from './assignment-home-routing.module';

@NgModule({
  declarations: [AssignmentHomeComponent],
  imports: [AssignmentHomeRoutingModule, SharedModule, AssignmentItemModule],
  providers: [AssignmentService],
})
export class AssignmentHomeModule {}
