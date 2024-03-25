import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseImageService } from '@core/services/api/course-image.service';
import { CourseService } from '@core/services/api/course.service';
import { LevelService } from '@core/services/api/level.service';
import { ISelectOption } from '@shared/component/form-group/select-list/select-list.component';
import { CourseUpdateDTO } from '@shared/models/dto/course.dto';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-detail-edit',
  styleUrls: ['course-detail-edit.component.scss'],
  templateUrl: 'course-detail-edit.component.html',
})
export class CourseDetailEditComponent implements OnInit {
  course: CourseGetDetailRO;
  categories: CategoryGetListDataRO[];
  levels: ISelectOption[];

  image: File;

  dto: CourseUpdateDTO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _courseService: CourseService,
    private _categoryService: CategoryService,
    private _courseImageService: CourseImageService,
    private _levelService: LevelService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._courseService.getDetail(id, { withCategoryIds: true }).subscribe({
      next: response => {
        this.course = response;
        this.dto = {
          name: response.name,
          description: response.description,
          categoryIds: response.categoryIds,
          levelId: response.levelId,
          hours: response.hours,
        };
      },
    });
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
      },
    });
    this._levelService.getList().subscribe({
      next: response => {
        this.levels = response.data.map(level => ({ label: level.name, value: level.id }));
      },
    });
  }

  update() {
    console.log(this.dto);
    this._courseService
      .update(this.course.id, this.dto)
      .pipe(
        switchMap(() => {
          if (this.image) {
            return this._courseImageService.upsert(this.course.id, { files: [this.image] });
          } else {
            return of(null); // Return an observable that immediately completes if no image is set
          }
        }),
      )
      .subscribe(() => {
        this.toast.success('Cập nhật khóa học thành công');
        window.history.back();
      });
  }

  onFileInputChange(event) {
    this.image = event.target.files[0];
  }
}
