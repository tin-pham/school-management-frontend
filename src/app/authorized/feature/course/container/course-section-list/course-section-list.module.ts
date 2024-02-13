import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SectionService } from '@core/services/api/section.service';
import { CourseSectionModule } from '../course-section/course-section.module';
import { CourseSectionListComponent } from './course-section-list.component';

@NgModule({
  imports: [SharedModule, CourseSectionModule],
  declarations: [CourseSectionListComponent],
  providers: [SectionService],
  exports: [CourseSectionListComponent],
})
export class CourseSectionListModule {}
