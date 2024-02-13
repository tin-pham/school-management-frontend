import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseSectionComponent } from './course-section.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseSectionComponent],
  providers: [],
  exports: [CourseSectionComponent],
})
export class CourseSectionModule {}
