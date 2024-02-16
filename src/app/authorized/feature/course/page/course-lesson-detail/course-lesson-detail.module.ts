import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LessonService } from '@core/services/api/lesson.service';
import { CourseSectionListModule } from '../../container/course-section-list/course-section-list.module';
import { LessonTabModule } from '../../container/lesson-tab/lesson-tab.module';
import { CourseLessonDetailComponent } from './course-lesson-detail.component';
import { CourseLessonDetailRoutingModule } from './course-lesson-detail-routing.module';

@NgModule({
  declarations: [CourseLessonDetailComponent],
  imports: [CourseLessonDetailRoutingModule, SharedModule, CourseSectionListModule, LessonTabModule],
  providers: [LessonService],
})
export class CourseLessonDetailModule {}
