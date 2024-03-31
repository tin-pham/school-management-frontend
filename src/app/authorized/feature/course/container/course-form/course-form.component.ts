import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseService } from '@core/services/api/course.service';
import { LevelService } from '@core/services/api/level.service';
import { CacheStorageFacet, CacheStorageService } from '@core/services/cache.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
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

  courseId: number;
  dto = new CourseStoreDTO();
  image: File;
  imageUrl: string;
  categories: SelectSearchOption[] = [];
  levels: ISelectOption[] = [];

  constructor(
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _courseService: CourseService,
    private _courseImageService: CourseImageService,
    private _levelService: LevelService,
    cacheService: CacheStorageService,
  ) {
    this.cacheStorage = cacheService.forKey('course-create');
  }

  ngOnInit() {
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
        const categoryId = +this.route.snapshot.queryParamMap.get('categoryId');
        if (categoryId) {
          this.dto.categoryIds = [categoryId];
        }
      },
    });
    this._levelService.getList().subscribe({
      next: response => {
        this.levels = response.data.map(level => ({ label: level.name, value: level.id }));
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
        switchMap(response => {
          this.courseId = response.id;
          if (this.image) {
            return this._courseImageService.upsert(this.courseId, { files: [this.image] });
          } else {
            return of(null); // Return an observable that immediately completes if no image is set
          }
        }),
      )
      .subscribe({
        next: () => {
          this.toast.success('Tạo khóa học thành công');
          this.cacheStorage.remove();
          window.history.back();
        },
      });
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }
}
