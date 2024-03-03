import { NgModule } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { SharedModule } from '@shared/shared.module';
import { CourseCardsModule } from '@features/course/component/course-cards/course-cards.module';
import { CourseGroupModule } from '../../container/course-group/course-group.module';
import { CourseToolbarModule } from '../../container/course-toolbar/course-toolbar.module';
import { CourseListComponent } from './course-list.component';
import { CourseListRoutingModule } from './course-list-routing.module';

@NgModule({
  declarations: [CourseListComponent],
  imports: [CourseListRoutingModule, CourseGroupModule, SharedModule, CourseToolbarModule, CourseCardsModule],
  providers: [CategoryService],
})
export class CourseListModule {}
