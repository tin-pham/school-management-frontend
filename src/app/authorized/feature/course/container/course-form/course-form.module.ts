import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { S3Service } from '@core/services/api/s3.service';
import { CacheStorageService } from '@core/services/cache.service';
import { CourseFormComponent } from './course-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseFormComponent],
  providers: [CategoryService, CourseService, S3Service, CacheStorageService],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}
