import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryGetDetailRO } from '@shared/models/ro/category.ro';
import { Observable } from 'rxjs';
import { CategoryService } from '@core/services/api/category.service';
import { ToastrService } from '@shared/toastr/toastr.service';
import { CategoryUpdateDTO } from '@shared/models/dto/category.dto';
import { UncategorizeCourseDialogComponent } from '../uncategorize-course-dialog/uncategorize-course-dialog.component';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  private _category: CategoryGetDetailRO;

  @Input()
  set category(value: CategoryGetDetailRO) {
    this._category = value;
    this.dto = new CategoryUpdateDTO(this._category);
  }

  @Output() categoryChange = new EventEmitter<CategoryGetDetailRO>();
  onCategoryChange(category: CategoryGetDetailRO) {
    this.category = category;
    this.categoryChange.emit(category);
  }

  get category(): CategoryGetDetailRO {
    return this._category;
  }

  @Input() onUpdate: Observable<void>;
  @Input() edit: boolean;
  @Output() editChange = new EventEmitter<boolean>();

  dto = new CategoryUpdateDTO();

  constructor(
    private dialog: MatDialog,
    private toast: ToastrService,
    private _categoryService: CategoryService,
  ) {}

  addCourse() {
    this.dialog.open(UncategorizeCourseDialogComponent).afterClosed().subscribe();
  }

  confirmUpdate() {
    // Update
    this._categoryService.update(this.category.id, this.dto).subscribe({
      next: response => {
        this.toast.success('Cập nhật danh mục này');
        this.onCategoryChange(response);
        this.editChange.emit(false);
      },
    });
  }

  cancel() {
    this.editChange.emit(false);
  }
}
