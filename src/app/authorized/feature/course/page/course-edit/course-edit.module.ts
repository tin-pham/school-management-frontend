import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseService } from '@core/services/api/course.service';
import { CategoryService } from '@core/services/api/category.service';
import { LevelService } from '@core/services/api/level.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseEditComponent } from './course-edit.component';
import { CourseEditRoutingModule } from './course-edit-routing.module';

@NgModule({
  imports: [SharedModule, CourseEditRoutingModule],
  providers: [CourseService, CategoryService, LevelService, CourseImageService],
  declarations: [CourseEditComponent],
  exports: [CourseEditComponent],
})
export class CourseEditModule {}
