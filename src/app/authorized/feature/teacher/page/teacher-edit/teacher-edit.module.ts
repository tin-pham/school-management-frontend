import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherEditComponent } from './teacher-edit.component';
import { TeacherEditRoutingModule } from './teacher-edit-routing.module';

@NgModule({
  declarations: [TeacherEditComponent],
  imports: [TeacherEditRoutingModule, SharedModule],
  providers: [TeacherService],
})
export class TeacherEditModule {}
