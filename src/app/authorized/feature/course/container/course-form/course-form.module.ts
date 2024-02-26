import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CacheStorageService } from '@core/services/cache.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseFormComponent } from './course-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseFormComponent],
  providers: [CategoryService, CourseService, CacheStorageService, CourseImageService],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}
