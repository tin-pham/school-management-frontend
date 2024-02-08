import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseCardModule } from 'app/authorized/feature/course/component/course-card/course-card.module';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGroupComponent } from '../../container/category-group/category-group.component';

@NgModule({
  imports: [SharedModule, CourseCardModule],
  declarations: [CategoryGroupComponent],
  providers: [CourseService],
  exports: [CategoryGroupComponent],
})
export class CategoryGroupModule {}
