import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentService } from '@core/services/api/student.service';
import { StudentCreateComponent } from './student-create.component';
import { StudentCreateRoutingModule } from './student-create-routing.module';

@NgModule({
  declarations: [StudentCreateComponent],
  imports: [StudentCreateRoutingModule, SharedModule],
  providers: [StudentService],
})
export class StudentCreateModule {}
