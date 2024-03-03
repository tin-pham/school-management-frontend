import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseCardModule } from '../course-card/course-card.module';
import { CourseCardsComponent } from './course-cards.component';

@NgModule({
  imports: [SharedModule, CourseCardModule],
  declarations: [CourseCardsComponent],
  exports: [CourseCardsComponent],
})
export class CourseCardsModule {}
