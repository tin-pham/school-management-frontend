import { Component, Input } from '@angular/core';
import { QuestionCategoryGetListDataRO } from '@shared/models/ro/question-category.ro';

@Component({
  selector: 'app-question-category-item',
  styleUrls: ['question-category-item.component.scss'],
  templateUrl: 'question-category-item.component.html',
})
export class QuestionCategoryItemComponent {
  @Input() questionCategory: QuestionCategoryGetListDataRO;
}
