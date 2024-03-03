import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseCardsModule } from '@features/course/component/course-cards/course-cards.module';
import { CourseToolbarModule } from '../course-toolbar/course-toolbar.module';
import { CourseGroupComponent } from './course-group.component';

@NgModule({
  imports: [SharedModule, CourseToolbarModule, CourseCardsModule],
  declarations: [CourseGroupComponent],
  providers: [],
  exports: [CourseGroupComponent],
})
export class CourseGroupModule {}
