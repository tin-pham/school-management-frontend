import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseService } from '@core/services/api/course.service';
import { CategoryService } from '@core/services/api/category.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseDetailEditComponent } from './course-detail-edit.component';
import { CourseDetailEditRoutingModule } from './course-detail-edit-routing.module';

const COMPONENTS = [CourseDetailEditComponent];

@NgModule({
  imports: [SharedModule, CourseDetailEditRoutingModule],
  declarations: [...COMPONENTS],
  providers: [CourseService, CategoryService, CourseImageService],
  exports: [...COMPONENTS],
})
export class CourseDetailEditModule {}
