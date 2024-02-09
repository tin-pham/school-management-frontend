import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailSidebarComponent } from './course-detail-sidebar.component';

const COMPONENTS = [CourseDetailSidebarComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS],
})
export class CourseDetailSidebarModule {}
