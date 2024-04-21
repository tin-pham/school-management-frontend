import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionCategoryService } from '@core/services/api/question-category.service';
import { QuestionCategoryUpdateDTO } from '@shared/models/dto/question-category.dto';
import { QuestionCategoryGetDetailRO } from '@shared/models/ro/question-category.ro';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-question-category-edit',
  styleUrls: ['question-category-edit.component.scss'],
  templateUrl: 'question-category-edit.component.html',
})
export class QuestionCategoryEditComponent implements OnInit {
  questionCategory: QuestionCategoryGetDetailRO;
  questionCategoryId: number;

  dto: QuestionCategoryUpdateDTO;

  constructor(
    private route: ActivatedRoute,
    private toast: ToastrService,
    private _questionCategoryService: QuestionCategoryService,
  ) {}

  ngOnInit() {
    this.questionCategoryId = +this.route.snapshot.paramMap.get('id');
    this._questionCategoryService.getDetail(this.questionCategoryId).subscribe(response => {
      this.questionCategory = response;
      this.dto = this.questionCategory;
    });
  }

  update() {
    this._questionCategoryService.update(this.questionCategoryId, this.dto).subscribe(() => {
      window.history.back();
      this.toast.success('Cập nhật thành công');
    });
  }
}
