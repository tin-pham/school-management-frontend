import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseCardComponent } from '../../component/course-card/course-card.component';
import { CourseToolbarModule } from '../course-toolbar/course-toolbar.module';
import { CourseGroupComponent } from './course-group.component';

@NgModule({
  imports: [SharedModule, CourseToolbarModule],
  declarations: [CourseGroupComponent, CourseCardComponent],
  providers: [],
  exports: [CourseGroupComponent],
})
export class CourseGroupModule {}
