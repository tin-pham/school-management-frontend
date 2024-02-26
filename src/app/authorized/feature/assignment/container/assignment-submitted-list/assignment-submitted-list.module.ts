import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentSubmittedItemModule } from '../assignment-submitted-item/assignment-submitted-item.module';
import { AssignmentSubmittedListComponent } from './assignment-submitted-list.component';

@NgModule({
  imports: [SharedModule, AssignmentSubmittedItemModule],
  declarations: [AssignmentSubmittedListComponent],
  exports: [AssignmentSubmittedListComponent],
})
export class AssignmentSubmittedListModule {}
