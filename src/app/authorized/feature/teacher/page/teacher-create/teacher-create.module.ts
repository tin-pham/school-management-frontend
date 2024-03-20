import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherCreateComponent } from './teacher-create.component';
import { TeacherCreateRoutingModule } from './teacher-create-routing.module';

@NgModule({
  declarations: [TeacherCreateComponent],
  imports: [TeacherCreateRoutingModule, SharedModule],
  providers: [TeacherService],
})
export class TeacherCreateModule {}
