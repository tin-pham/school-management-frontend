import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { S3Service } from '@core/services/api/s3.service';
import { CacheStorageFacet, CacheStorageService } from '@core/services/cache.service';
import { SelectSearchOption } from '@shared/component/form-group/select-search/select-search.component';
import { CourseStoreDTO } from '@shared/models/dto/course.dto';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-form',
  styleUrls: ['course-form.component.scss'],
  templateUrl: 'course-form.component.html',
})
export class CourseFormComponent implements OnInit {
  private cacheStorage: CacheStorageFacet;

  dto = new CourseStoreDTO();
  image: File;
  imageUrl: string;
  categories: SelectSearchOption[] = [];

  constructor(
    private toast: ToastrService,
    private router: Router,
    private _categoryService: CategoryService,
    private _courseService: CourseService,
    private _s3Service: S3Service,
    cacheService: CacheStorageService,
  ) {
    this.cacheStorage = cacheService.forKey('course-create');
  }

  ngOnInit() {
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
      },
    });
    this.restoreCacheStorage();
  }

  async restoreCacheStorage(): Promise<void> {
    const cachedFormData = await this.cacheStorage.get<CourseStoreDTO>();

    if (cachedFormData) {
      Object.assign(this.dto, cachedFormData);
    }
  }

  saveToTemporaryStorage(): void {
    this.cacheStorage.set(this.dto);
  }

  onSubmit() {
    this._courseService
      .store(this.dto)
      .pipe(
        switchMap(() => {
          if (this.image) {
            return this._s3Service.bulkUpload({
              files: [this.image],
              directoryPath: 'course/image',
            });
          } else {
            return of(null); // Return an observable that immediately completes if no image is set
          }
        }),
        switchMap(response => {
          // Only call update if the first switchMap returned a response
          if (response) {
            return this._courseService.update(response.id, { imageUrl: response.data });
          } else {
            return of(null); // Return an observable that immediately completes if there was no initial response
          }
        }),
      )
      .subscribe({
        next: () => {
          this.toast.success('Tạo khóa học thành công');
          this.cacheStorage.remove();
          this.router.navigate(['/course']);
        },
      });
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }
}
