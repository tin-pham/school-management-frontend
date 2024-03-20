import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TeacherListModule } from '@features/teacher/container/teacher-list/teacher-list.module';
import { TeacherHomeRoutingModule } from './teacher-home-routing.module';
import { TeacherHomeComponent } from './teacher-home.component';

@NgModule({
  declarations: [TeacherHomeComponent],
  imports: [TeacherHomeRoutingModule, SharedModule, TeacherListModule],
})
export class TeacherHomeModule {}
