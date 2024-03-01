import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitGradeComponent } from './assignment-submit-grade.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentSubmitGradeComponent],
  providers: [],
  exports: [AssignmentSubmitGradeComponent],
})
export class AssignmentSubmitGradeModule {}
