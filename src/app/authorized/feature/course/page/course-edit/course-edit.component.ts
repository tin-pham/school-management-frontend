import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseService } from '@core/services/api/course.service';
import { LevelService } from '@core/services/api/level.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { SelectSearchOption } from '@shared/component/form-group/select-search/select-search.component';
import { CourseUpdateDTO } from '@shared/models/dto/course.dto';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-edit',
  styleUrls: ['course-edit.component.scss'],
  templateUrl: 'course-edit.component.html',
})
export class CourseEditComponent implements OnInit {
  dto: CourseUpdateDTO;
  course: CourseGetDetailRO;
  courseId: number;
  image: File;
  categories: SelectSearchOption[] = [];
  levels: ISelectOption[] = [];

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _courseService: CourseService,
    private _levelService: LevelService,
    private _courseImageService: CourseImageService,
    private _categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
        const categoryId = +this.route.snapshot.queryParamMap.get('categoryId');
        if (categoryId) {
          this.dto.categoryIds = [categoryId];
        }
      },
    });
    this._courseService.getDetail(this.courseId, { withCategoryIds: true }).subscribe(response => {
      this.course = response;
      this.dto = {
        name: response.name,
        description: response.description,
        categoryIds: response.categoryIds,
        levelId: response.levelId,
        hours: response.hours,
      };
      console.log(this.dto);
    });

    this._levelService.getList().subscribe({
      next: response => {
        this.levels = response.data.map(level => ({ label: level.name, value: level.id }));
      },
    });
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }

  update() {
    this._courseService
      .update(this.courseId, this.dto)
      .pipe(
        switchMap(() => {
          if (this.image) {
            return this._courseImageService.upsert(this.courseId, { files: [this.image] });
          } else {
            return of(null); // Return an observable that immediately completes if no image is set
          }
        }),
      )
      .subscribe({
        next: () => {
          this.toast.success('Cập nhật khóa học thành công');
          window.history.back();
        },
      });
  }
}
