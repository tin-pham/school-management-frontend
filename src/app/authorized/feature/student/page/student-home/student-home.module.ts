import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentListModule } from '@features/student/container/student-list/student-list.module';
import { StudentHomeRoutingModule } from './student-home-routing.module';
import { StudentHomeComponent } from './student-home.component';

@NgModule({
  declarations: [StudentHomeComponent],
  imports: [StudentHomeRoutingModule, SharedModule, StudentListModule],
})
export class StudentHomeModule {}
