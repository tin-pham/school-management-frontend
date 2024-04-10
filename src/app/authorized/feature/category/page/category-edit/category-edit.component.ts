import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { CategoryService } from '@core/services/api/category.service';
import { ToastrService } from '@shared/toastr/toastr.service';
import { CategoryUpdateDTO } from '@shared/models/dto/category.dto';
import { ActivatedRoute } from '@angular/router';
import { UncategorizeCourseDialogComponent } from '@features/category/container/uncategorize-course-dialog/uncategorize-course-dialog.component';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  categoryId: number;
  category: CategoryGetDetailRO;
  dto = new CategoryUpdateDTO();

  constructor(
    private dialog: MatDialog,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.categoryId = +this.route.snapshot.params['id'];
    this._categoryService.getDetail(this.categoryId).subscribe({
      next: response => {
        this.category = response;
        this.dto.name = this.category.name;
        this.dto.description = this.category.description;
      },
    });
  }

  addCourse() {
    this.dialog.open(UncategorizeCourseDialogComponent).afterClosed().subscribe();
  }

  update() {
    this._categoryService.update(this.category.id, this.dto).subscribe(() => {
      this.toast.success('Cập nhật danh mục thành công');
    });
  }
}
