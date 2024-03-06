import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmitNotGradedComponent } from './assignment-submit-not-graded.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentSubmitNotGradedComponent],
  providers: [],
  exports: [AssignmentSubmitNotGradedComponent],
})
export class AssignmentSubmitNotGradedModule {}
