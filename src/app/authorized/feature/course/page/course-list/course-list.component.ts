import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';

@Component({
  selector: 'app-course-list',
  styleUrls: ['course-list.component.scss'],
  templateUrl: 'course-list.component.html',
})
export class CourseListComponent implements OnInit {
  categories: CategoryGetListDataRO[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    const dto = new CategoryGetListDTO({
      withCourse: true,
      withCourseCount: true,
    });
    this.categoryService.getList(dto).subscribe({
      next: response => {
        this.categories = response.data;
      },
    });
  }
}
