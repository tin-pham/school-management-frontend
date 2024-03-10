import { Component } from '@angular/core';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryStoreDTO } from '@shared/models/dto/question-category.dto';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-create',
  styleUrls: ['question-category-create.component.scss'],
  templateUrl: 'question-category-create.component.html',
})
export class QuestionCategoryCreateComponent {
  dto = new QuestionCategoryStoreDTO();

  constructor(
    private toast: ToastrService,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  store() {
    this._questionCategoryService.store(this.dto).subscribe(() => {
      this.toast.success('Tạo danh mục câu hỏi thành công');
      window.history.back();
    });
  }
}
