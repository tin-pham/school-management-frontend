import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SectionService } from '@core/services/api/section.service';
import { LessonService } from '@core/services/api/lesson.service';
import { CourseSectionDetailRoutingModule } from './course-section-detail-routing.module';
import { CourseSectionDetailComponent } from './course-section-detail.component';

@NgModule({
  declarations: [CourseSectionDetailComponent],
  imports: [CourseSectionDetailRoutingModule, SharedModule],
  providers: [SectionService, LessonService],
})
export class CourseSectionDetailModule {}
