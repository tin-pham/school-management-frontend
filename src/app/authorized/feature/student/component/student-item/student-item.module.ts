import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentItemComponent } from './student-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [StudentItemComponent],
  exports: [StudentItemComponent],
})
export class StudentItemModule {}
