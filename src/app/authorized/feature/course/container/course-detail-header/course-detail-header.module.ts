import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailHeaderComponent } from './course-detail-header.component';

const COMPONENTS = [CourseDetailHeaderComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CourseDetailHeaderModule {}
