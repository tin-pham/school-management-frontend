import { NgModule } from '@angular/core';
import { CourseCardModule } from '@features/course/component/course-card/course-card.module';
import { CourseService } from '@core/services/api/course.service';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CourseCardModule, SharedModule],
  providers: [CourseService],
})
export class HomeModule {}
