import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-group',
  styleUrls: ['course-group.component.scss'],
  templateUrl: 'course-group.component.html',
})
export class CourseGroupComponent implements OnInit {
  @Input() category: CategoryGetListDataRO;
  @Output() categoryDeleted = new EventEmitter();

  courses: CourseGetListDataRO[];

  constructor(
    private toast: ToastrService,
    private _categoryService: CategoryService,
    private _courseService: CourseService,
  ) {}

  ngOnInit() {
    this._courseService
      .getList({
        categoryId: this.category.id,
        limit: 3,
      })
      .subscribe({
        next: response => (this.courses = response.data),
      });
  }

  onDeleteCategory() {
    this._categoryService.delete(this.category.id).subscribe({
      next: () => {
        this.toast.success('Xóa danh mục thành công');
        this.categoryDeleted.emit(this.category.id);
      },
    });
  }
}
