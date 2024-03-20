import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentService } from '@core/services/api/student.service';
import { StudentEditComponent } from './student-edit.component';
import { StudentEditRoutingModule } from './student-edit-routing.module';

@NgModule({
  declarations: [StudentEditComponent],
  imports: [StudentEditRoutingModule, SharedModule],
  providers: [StudentService],
})
export class StudentEditModule {}
