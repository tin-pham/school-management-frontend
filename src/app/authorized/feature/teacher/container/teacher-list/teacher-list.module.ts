import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TeacherService } from '@core/services/api/teacher.service';
import { TeacherItemModule } from '@features/teacher/component/teacher-item/teacher-item.module';
import { TeacherListComponent } from './teacher-list.component';

@NgModule({
  imports: [SharedModule, TeacherItemModule],
  declarations: [TeacherListComponent],
  providers: [TeacherService],
  exports: [TeacherListComponent],
})
export class TeacherListModule {}
