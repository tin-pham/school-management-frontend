import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { SharedModule } from '@shared/shared.module';
import { CourseGroupModule } from '../../container/course-group/course-group.module';
import { CourseListComponent } from './course-list.component';
import { CourseListRoutingModule } from './course-list-routing.module';

@NgModule({
  declarations: [CourseListComponent],
  imports: [CourseListRoutingModule, CourseGroupModule, SharedModule],
  providers: [CategoryService],
})
export class CourseListModule {}
