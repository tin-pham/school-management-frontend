import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryDetailComponent } from './question-category-detail.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionCategoryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionCategoryDetailRoutingModule {}
