import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailHeaderModule } from '../../container/course-detail-header/course-detail-header.module';
import { CourseDetailSidebarModule } from '../../container/course-detail-sidebar/course-detail-sidebar.module';
import { CourseSectionListModule } from '../../container/course-section-list/course-section-list.module';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';

const CONTAINERS = [CourseDetailHeaderModule, CourseDetailSidebarModule, CourseSectionListModule];

@NgModule({
  imports: [SharedModule, CourseDetailRoutingModule, ...CONTAINERS],
  declarations: [CourseDetailComponent],
  exports: [...CONTAINERS],
})
export class CourseDetailModule {}
