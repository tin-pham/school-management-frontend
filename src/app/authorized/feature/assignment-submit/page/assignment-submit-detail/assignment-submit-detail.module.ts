import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentSubmitGradeFormModule } from '@features/assignment-submit/container/assignment-submit-grade-form/assignment-submit-grade-form.module';
import { AssignmentSubmitGradeModule } from '@features/assignment-submit/container/assignment-submit-grade/assignment-submit-grade.module';
import { AssignmentSubmitGradeService } from '@core/services/api/assignment-submit-grade.service';
import { AssignmentSubmitDetailComponent } from './assignment-submit-detail.component';
import { AssignmentSubmitDetailRoutingModule } from './assignment-submit-detail-routing.module';

@NgModule({
  declarations: [AssignmentSubmitDetailComponent],
  imports: [AssignmentSubmitDetailRoutingModule, SharedModule, AssignmentSubmitGradeFormModule, AssignmentSubmitGradeModule],
  providers: [AssignmentSubmitService, AssignmentSubmitGradeService],
})
export class AssignmentSubmitDetailModule {}