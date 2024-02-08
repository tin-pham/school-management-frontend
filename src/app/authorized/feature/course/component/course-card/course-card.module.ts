import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseCardComponent } from '../../component/course-card/course-card.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
