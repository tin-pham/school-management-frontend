import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AssignmentItemComponent } from './assignment-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AssignmentItemComponent],
  providers: [],
  exports: [AssignmentItemComponent],
})
export class AssignmentItemModule {}
