import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailHeaderModule } from '@features/course/container/course-detail-header/course-detail-header.module';
import { CourseDetailSidebarModule } from '@features/course/container/course-detail-sidebar/course-detail-sidebar.module';
import { CourseSectionListModule } from '@features/course/container/course-section-list/course-section-list.module';
import { CourseOutcomeListModule } from '@features/course/container/course-outcome-list/course-outcome-list.module';
import { CourseService } from '@core/services/api/course.service';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseOutcomeService } from '@core/services/api/course-outcome.service';
import { CourseDetailHomeComponent } from './course-detail-home.component';
import { CourseDetailHomeRoutingModule } from './course-detail-home-routing.module';

const CONTAINERS = [CourseDetailHeaderModule, CourseDetailSidebarModule, CourseSectionListModule, CourseOutcomeListModule];

@NgModule({
  imports: [SharedModule, ...CONTAINERS, CourseDetailHomeRoutingModule],
  providers: [CourseService, CourseStudentService, CourseOutcomeService],
  declarations: [CourseDetailHomeComponent],
  exports: [CourseDetailHomeComponent, ...CONTAINERS],
})
export class CourseDetailHomeModule {}
