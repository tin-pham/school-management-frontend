import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmittedItemComponent } from './assignment-submitted-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentSubmittedItemComponent],
  exports: [AssignmentSubmittedItemComponent],
})
export class AssignmentSubmittedItemModule {}
