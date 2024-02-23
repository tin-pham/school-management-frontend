import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
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
    private router: Router,
    private _courseService: CourseService,
    private _categoryService: CategoryService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this._courseService.getList({ categoryId: this.category.id }).subscribe(response => (this.courses = response.data));
  }

  onDeleteCategory() {
    this._categoryService.delete(this.category.id).subscribe({
      next: () => {
        this.toast.success('Xóa danh mục thành công');
        this.categoryDeleted.emit(this.category.id);
      },
    });
  }

  routeToAddCourse() {
    this.router.navigate(['/course/create'], { queryParams: { categoryId: this.category.id } });
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
