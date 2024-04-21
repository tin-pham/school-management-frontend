import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { CategoryCourseService } from '@core/services/api/category-course.service';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { IImageCardOption } from '@shared/component/image-card/image-card.component';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';
import { ToastrService } from '@shared/toastr/toastr.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-course-group',
  styleUrls: ['course-group.component.scss'],
  templateUrl: 'course-group.component.html',
})
export class CourseGroupComponent implements OnInit {
  @Input() category: CategoryGetListDataRO;
  @Output() categoryDeleted = new EventEmitter();
  @Input() assignmentIcon: boolean;

  courses: CourseGetListDataRO[];

  courseCardOption: IImageCardOption = {
    haveDelete: true,
    haveClose: true,
  };

  constructor(
    private toast: ToastrService,
    private router: Router,
    private _courseService: CourseService,
    private _categoryService: CategoryService,
    private _authService: AuthService,
    private _categoryCourseService: CategoryCourseService,
  ) {}

  ngOnInit() {
    this._courseService.getList({ categoryId: this.category.id, limit: 5 }).subscribe(response => (this.courses = response.data));
  }

  deleteCategory() {
    this._categoryService.delete(this.category.id).subscribe({
      next: () => {
        this.toast.success('Xóa danh mục thành công');
        this.categoryDeleted.emit(this.category.id);

        this._courseService.getList({ categoryId: null }).subscribe(response => {
          this._courseService.setUncategorizedCourses(response.data);
        });
      },
    });
  }

  routeToAddCourse() {
    this.router.navigate(['/course/create'], { queryParams: { categoryId: this.category.id } });
  }

  isStudent() {
    return this._authService.isStudent();
  }

  deleteCourse(courseId: number) {
    this._courseService.delete(courseId).subscribe(() => {
      this.toast.success('Xóa khóa học này');
      this.courses = this.courses.filter(course => course.id !== courseId);
    });
  }

  removeCourseFromCategory(courseId: number) {
    this._categoryCourseService
      .delete({
        categoryId: this.category.id,
        courseId,
      })
      .pipe(
        // Manually trigger refetch uncategorized courses
        tap(() =>
          this._courseService
            .getList({ categoryId: null })
            .subscribe(response => this._courseService.setUncategorizedCourses(response.data)),
        ),
      )
      .subscribe(() => {
        this.toast.success('Đã xóa khóa học khỏi danh mục');
        this.courses = this.courses.filter(course => course.id !== courseId);
      });
  }
}
