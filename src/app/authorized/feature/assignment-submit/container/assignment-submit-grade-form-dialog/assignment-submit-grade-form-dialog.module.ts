import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitGradeFormModule } from '../assignment-submit-grade-form/assignment-submit-grade-form.module';
import { AssignmentSubmitGradeFormDialogComponent } from './assignment-submit-grade-form-dialog.component';

@NgModule({
  imports: [SharedModule, AssignmentSubmitGradeFormModule],
  declarations: [AssignmentSubmitGradeFormDialogComponent],
  providers: [],
  exports: [AssignmentSubmitGradeFormDialogComponent],
})
export class AssignmentSubmitGradeFormDialogModule {}
