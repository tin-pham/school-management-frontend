import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { SharedModule } from '@shared/shared.module';
import { CourseDetailHeaderModule } from '../../container/course-detail-header/course-detail-header.module';
import { CourseDetailSidebarModule } from '../../container/course-detail-sidebar/course-detail-sidebar.module';
import { CourseDetailComponent } from './course-detail.component';
import { CourseDetailRoutingModule } from './course-detail-routing.module';

@NgModule({
  declarations: [CourseDetailComponent],
  imports: [SharedModule, CourseDetailRoutingModule, CourseDetailHeaderModule, CourseDetailSidebarModule],
  providers: [CategoryService],
})
export class CourseDetailModule {}
