import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseSectionListComponent } from './course-section-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseSectionListComponent],
  providers: [],
  exports: [CourseSectionListComponent],
})
export class CourseSectionListModule {}
