import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryEditComponent } from './question-category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionCategoryEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionCategoryEditRoutingModule {}
