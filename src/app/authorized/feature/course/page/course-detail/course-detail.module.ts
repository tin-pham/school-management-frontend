import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseOutcomeListModule } from '@features/course/container/course-outcome-list/course-outcome-list.module';
import { CourseService } from '@core/services/api/course.service';
import { CourseOutcomeService } from '@core/services/api/course-outcome.service';
import { CourseStudentService } from '@core/services/api/course-student.service';
import { CourseDetailHeaderModule } from '../../container/course-detail-header/course-detail-header.module';
import { CourseDetailSidebarModule } from '../../container/course-detail-sidebar/course-detail-sidebar.module';
import { CourseSectionListModule } from '../../container/course-section-list/course-section-list.module';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';

const CONTAINERS = [CourseDetailHeaderModule, CourseDetailSidebarModule, CourseSectionListModule, CourseOutcomeListModule];

@NgModule({
  imports: [SharedModule, CourseDetailRoutingModule, ...CONTAINERS],
  providers: [CourseService, CourseOutcomeService, CourseStudentService],
  declarations: [CourseDetailComponent],
  exports: [...CONTAINERS],
})
export class CourseDetailModule {}
