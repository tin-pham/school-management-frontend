import { NgModule } from '@angular/core';
import { CourseCardModule } from '@features/course/component/course-card/course-card.module';
import { SharedModule } from '@shared/shared.module';
import { CourseService } from '@core/services/api/course.service';
import { CourseSearchComponent } from './course-search.component';
import { CourseSearchRoutingModule } from './course-search-routing.module';

@NgModule({
  declarations: [CourseSearchComponent],
  imports: [CourseSearchRoutingModule, CourseCardModule, SharedModule],
  providers: [CourseService],
})
export class CourseSearchModule {}
