import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryCreateComponent } from './question-category-create.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionCategoryCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionCategoryCreateRoutingModule {}
