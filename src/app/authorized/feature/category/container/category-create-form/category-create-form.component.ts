import { Component } from '@angular/core';
import { CacheForm } from '@core/base/cache-form.base';
import { CategoryService } from '@core/services/api/category.service';
import { CacheStorageService } from '@core/services/cache.service';
import { CategoryStoreDTO } from '@shared/models/dto/category.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-category-create-form',
  templateUrl: './category-create-form.component.html',
  styleUrls: ['./category-create-form.component.scss'],
})
export class CategoryCreateFormComponent extends CacheForm<CategoryStoreDTO> {
  dto = new CategoryStoreDTO();

  constructor(
    _cacheService: CacheStorageService,
    private toast: ToastrService,
    private _categoryService: CategoryService,
  ) {
    super(_cacheService, 'category-create-form');
  }

  onSubmit() {
    console.log(this.dto);
    this._categoryService.store(this.dto).subscribe({
      next: () => {
        this.toast.success('Tạo danh mục thành công');
        this.clearForm();
        window.history.back();
      },
    });
  }

  clearForm() {
    this.dto = new CategoryStoreDTO();
    this.removeCache();
  }
}
