import { NgModule } from '@angular/core';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentSubmitRoutingModule } from './assignment-submit-routing.module';
import { AssignmentSubmitComponent } from './assignment-submit.component';

@NgModule({
  declarations: [AssignmentSubmitComponent],
  providers: [AssignmentSubmitService, AssignmentService],
  imports: [AssignmentSubmitRoutingModule],
})
export class AssignmentSubmitModule {}
