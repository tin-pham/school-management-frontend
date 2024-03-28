import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitService } from '@core/services/api/assignment-submit.service';
import { AssignmentSubmitGradeFormModule } from '@features/assignment-submit/container/assignment-submit-grade-form/assignment-submit-grade-form.module';
import { AssignmentSubmitGradeModule } from '@features/assignment-submit/container/assignment-submit-grade/assignment-submit-grade.module';
import { AssignmentSubmitGradeService } from '@core/services/api/assignment-submit-grade.service';
import { AssignmentSubmitNotGradedModule } from '@features/assignment-submit/component/assignment-submit-not-graded/assignment-submit-not-graded.module';
import { AssignmentSubmitGradeFormDialogModule } from '@features/assignment-submit/container/assignment-submit-grade-form-dialog/assignment-submit-grade-form-dialog.module';
import { AssignmentSubmitDetailComponent } from './assignment-submit-detail.component';
import { AssignmentSubmitDetailRoutingModule } from './assignment-submit-detail-routing.module';

@NgModule({
  declarations: [AssignmentSubmitDetailComponent],
  imports: [
    AssignmentSubmitDetailRoutingModule,
    SharedModule,
    AssignmentSubmitGradeFormDialogModule,
    AssignmentSubmitGradeModule,
    AssignmentSubmitNotGradedModule,
  ],
  providers: [AssignmentSubmitService, AssignmentSubmitGradeService],
})
export class AssignmentSubmitDetailModule {}
