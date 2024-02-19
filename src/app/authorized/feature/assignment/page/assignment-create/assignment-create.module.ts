import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentCreateComponent } from './assignment-create.component';
import { AssignmentCreateRoutingModule } from './assignment-create-routing.module';

@NgModule({
  declarations: [AssignmentCreateComponent],
  imports: [AssignmentCreateRoutingModule, SharedModule],
  providers: [AssignmentService],
})
export class AssignmentCreateModule {}
