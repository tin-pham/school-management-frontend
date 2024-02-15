import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetDetailRO } from '@shared/models/ro/course.ro';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-detail-edit',
  styleUrls: ['course-detail-edit.component.scss'],
  templateUrl: 'course-detail-edit.component.html',
})
export class CourseDetailEditComponent implements OnInit {
  course: CourseGetDetailRO;
  categories: CategoryGetListDataRO[];

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _courseService: CourseService,
    private _categoryService: CategoryService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._courseService.getDetail(id, { withCategoryIds: true }).subscribe({
      next: response => {
        this.course = response;
      },
    });
    this._categoryService.getList().subscribe({
      next: response => {
        this.categories = response.data;
      },
    });
  }

  update() {
    this._courseService.update(this.course.id, this.course).subscribe({
      next: () => {
        this.toast.success('Cập nhật khóa học thành công');
        window.history.back();
      },
    });
  }
}
