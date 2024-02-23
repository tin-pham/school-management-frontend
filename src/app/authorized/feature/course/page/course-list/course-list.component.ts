import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetListDataRO } from '@shared/models/ro/course.ro';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-course-list',
  styleUrls: ['course-list.component.scss'],
  templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  categories: CategoryGetListDataRO[] = [];
  uncategorizedCourses: CourseGetListDataRO[] = [];

  constructor(
    private _categoryService: CategoryService,
    private _courseService: CourseService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    const dto = new CategoryGetListDTO({
      limit: 5,
    });
    this._categoryService.getList(dto).subscribe({
      next: response => {
        this.categories = response.data;
      },
    });

    this._courseService
      .getList({
        categoryId: null,
      })
      .subscribe({
        next: response => {
          this.uncategorizedCourses = response.data;
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCategoryDeleted(categoryId: number) {
    this.categories.splice(
      this.categories.findIndex(category => category.id === categoryId),
      1,
    );
  }

  isStudent() {
    return this._authService.isStudent();
  }
}
