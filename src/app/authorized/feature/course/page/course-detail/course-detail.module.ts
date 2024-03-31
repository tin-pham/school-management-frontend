import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';

@NgModule({
  imports: [SharedModule, CourseDetailRoutingModule],
  providers: [],
  declarations: [CourseDetailComponent],
})
export class CourseDetailModule {}
