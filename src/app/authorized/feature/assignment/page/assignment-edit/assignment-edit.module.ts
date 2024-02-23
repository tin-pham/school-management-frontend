import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentService } from '@core/services/api/assignment.service';
import { AssignmentEditComponent } from './assignment-edit.component';
import { AssignmentEditRoutingModule } from './assignment-edit-routing.module';

@NgModule({
  declarations: [AssignmentEditComponent],
  imports: [AssignmentEditRoutingModule, SharedModule],
  providers: [AssignmentService],
})
export class AssignmentEditModule {}
