import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentService } from '@core/services/api/student.service';
import { StudentItemModule } from '@features/student/component/student-item/student-item.module';
import { StudentListComponent } from './student-list.component';

@NgModule({
  imports: [SharedModule, StudentItemModule],
  declarations: [StudentListComponent],
  providers: [StudentService],
  exports: [StudentListComponent],
})
export class StudentListModule {}
