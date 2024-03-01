import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitGradeModule } from '@features/assignment-submit/container/assignment-submit-grade/assignment-submit-grade.module';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentSubmitDetailComponent } from './assignment-submit-detail.component';
import { AssignmentSubmitDetailRoutingModule } from './assignment-submit-detail-routing.module';

@NgModule({
  declarations: [AssignmentSubmitDetailComponent],
  imports: [AssignmentSubmitDetailRoutingModule, SharedModule, AssignmentSubmitGradeModule],
  providers: [AssignmentSubmitService],
})
export class AssignmentSubmitDetailModule {}
