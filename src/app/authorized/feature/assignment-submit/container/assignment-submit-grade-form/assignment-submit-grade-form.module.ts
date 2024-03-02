import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitGradeFormComponent } from './assignment-submit-grade-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentSubmitGradeFormComponent],
  providers: [],
  exports: [AssignmentSubmitGradeFormComponent],
})
export class AssignmentSubmitGradeFormModule {}
