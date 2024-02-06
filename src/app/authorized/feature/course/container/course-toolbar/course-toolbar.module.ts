import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseToolbarComponent } from './course-toolbar.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseToolbarComponent],
  providers: [],
  exports: [CourseToolbarComponent],
})
export class CourseToolbarModule {}
