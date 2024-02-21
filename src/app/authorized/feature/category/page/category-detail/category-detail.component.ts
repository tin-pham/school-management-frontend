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
  coursePaginated: CourseGetListRO;
  edit = false;

  constructor(
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _courseService: CourseService,
  ) {}

  ngOnInit() {
    this.edit = false;

    const id = +this.route.snapshot.paramMap.get('id');
    this._categoryService.getDetail(id).subscribe(data => {
      this.category = data;
    });
    this._courseService
      .getList({
        categoryId: Number(id),
      })
      .subscribe({
        next: (response: CourseGetListRO) => {
          this.coursePaginated = response;
        },
      });
  }

  onEdit() {
    this.edit = true;
  }
}
