import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TeacherItemComponent } from './teacher-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [TeacherItemComponent],
  exports: [TeacherItemComponent],
})
export class TeacherItemModule {}
