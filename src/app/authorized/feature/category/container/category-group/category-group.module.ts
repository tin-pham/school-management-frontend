import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseService } from '@core/services/api/course.service';
import { CourseCardsModule } from '@features/course/component/course-cards/course-cards.module';
import { CategoryGroupComponent } from '../../container/category-group/category-group.component';

@NgModule({
  imports: [SharedModule, CourseCardsModule],
  declarations: [CategoryGroupComponent],
  providers: [CourseService],
  exports: [CategoryGroupComponent],
})
export class CategoryGroupModule {}
