import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryGetListDataRO } from '@shared/models/ro/category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-course-group',
  styleUrls: ['course-group.component.scss'],
  templateUrl: 'course-group.component.html',
})
export class CourseGroupComponent {
  @Input() category: CategoryGetListDataRO;
  @Output() categoryDeleted = new EventEmitter();

  constructor(
    private toast: ToastrService,
    private _categoryService: CategoryService,
  ) {}

  onDeleteCategory() {
    this._categoryService.delete(this.category.id).subscribe({
      next: () => {
        this.toast.success('Xóa danh mục thành công');
        this.categoryDeleted.emit(this.category.id);
      },
    });
  }
}
