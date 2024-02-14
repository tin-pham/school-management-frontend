import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SectionService } from '@core/services/api/section.service';
import { CourseSectionCreateComponent } from './course-section-create.component';
import { CourseSectionCreateRoutingModule } from './course-section-create-routing.module';

@NgModule({
  declarations: [CourseSectionCreateComponent],
  imports: [CourseSectionCreateRoutingModule, SharedModule],
  providers: [SectionService],
})
export class CourseSectionCreateModule {}
