import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CourseGetListDTO } from '@shared/models/dto/course.dto';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { CourseGetListDataRO, CourseGetListRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-course-list',
  styleUrls: ['course-list.component.scss'],
  templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {
  categories: CategoryGetListDataRO[] = [];
  uncategorizedCourses: CourseGetListDataRO[] = [];

  constructor(
    private categoryService: CategoryService,
    private courseService: CourseService,
  ) {}

  ngOnInit() {
    const dto = new CategoryGetListDTO({
      withCourse: true,
      withCourseCount: true,
      limit: 5,
    });
    this.categoryService.getList(dto).subscribe({
      next: response => {
        this.categories = response.data;
      },
    });

    this.courseService
      .getList({
        categoryId: null,
      })
      .subscribe({
        next: response => {
          this.uncategorizedCourses = response.data;
        },
      });
  }

  onCategoryDeleted(categoryId: number) {
    this.categories.splice(
      this.categories.findIndex(category => category.id === categoryId),
      1,
    );
  }
}
