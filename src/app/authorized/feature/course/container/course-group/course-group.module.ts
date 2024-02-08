import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseToolbarModule } from '../course-toolbar/course-toolbar.module';
import { CourseCardModule } from '../../component/course-card/course-card.module';
import { CourseGroupComponent } from './course-group.component';

@NgModule({
  imports: [SharedModule, CourseToolbarModule, CourseCardModule],
  declarations: [CourseGroupComponent],
  providers: [],
  exports: [CourseGroupComponent],
})
export class CourseGroupModule {}
