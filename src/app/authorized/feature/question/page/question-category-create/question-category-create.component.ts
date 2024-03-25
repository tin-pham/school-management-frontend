import { Component } from '@angular/core';
import { CacheForm } from '@core/base/cache-form.base';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { CacheStorageService } from '@core/services/cache.service';
import { QuestionCategoryStoreDTO } from '@shared/models/dto/question-category.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-create',
  styleUrls: ['question-category-create.component.scss'],
  templateUrl: 'question-category-create.component.html',
})
export class QuestionCategoryCreateComponent extends CacheForm<QuestionCategoryStoreDTO> {
  dto = new QuestionCategoryStoreDTO();

  constructor(
    _cacheService: CacheStorageService,
    private toast: ToastrService,
    private _questionCategoryService: QuestionCategoryService,
  ) {
    super(_cacheService, 'question-category-create');
  }

  store() {
    this._questionCategoryService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo danh mục câu hỏi thành công');
      this.clearForm();
      window.history.back();
    });
  }

  clearForm() {
    this.dto = new QuestionCategoryStoreDTO();
    this.removeCache();
  }
}
