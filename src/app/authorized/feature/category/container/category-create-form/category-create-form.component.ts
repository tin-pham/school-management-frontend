import { Component } from '@angular/core';
import { CategoryService } from '@core/services/api/category.service';
import { CategoryStoreDTO } from '@shared/models/dto/category.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-category-create-form',
  templateUrl: './category-create-form.component.html',
  styleUrls: ['./category-create-form.component.scss'],
})
export class CategoryCreateFormComponent {
  name: string;
  description: string;

  constructor(
    private toast: ToastrService,
    private _categoryService: CategoryService,
  ) {}

  onSubmit() {
    const dto = new CategoryStoreDTO({
      name: this.name,
      description: this.description,
    });
    this._categoryService.store(dto).subscribe({
      next: () => {
        this.toast.success('Tạo danh mục thành công');
        this.clearForm();
        window.history.back();
      },
    });
  }

  clearForm() {
    this.name = '';
    this.description = '';
  }
}
