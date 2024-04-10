import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/api/category.service';
import { CourseService } from '@core/services/api/course.service';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { CourseGetListRO } from '@shared/models/ro/course.ro';

@Component({
  selector: 'app-category-detail',
  styleUrls: ['category-detail.component.scss'],
  templateUrl: 'category-detail.component.html',
})
export class CategoryDetailComponent implements OnInit {
  category: CategoryGetDetailRO;
  categoryId: number;
  coursePaginated: CourseGetListRO;

  constructor(
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _courseService: CourseService,
  ) {}

  ngOnInit() {
    this.categoryId = +this.route.snapshot.paramMap.get('id');
    this._categoryService.getDetail(this.categoryId).subscribe(data => {
      this.category = data;
    });
    this._courseService
      .getList({
        categoryId: Number(this.categoryId),
      })
      .subscribe({
        next: (response: CourseGetListRO) => {
          this.coursePaginated = response;
        },
      });
  }
}
