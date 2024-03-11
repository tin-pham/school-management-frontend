import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/question-home/question-home.module').then(m => m.QuestionHomeModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./page/question-detail/question-detail.module').then(m => m.QuestionDetailModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./page/question-create/question-create.module').then(m => m.QuestionCreateModule),
      },
      {
        path: 'question-category/create',
        loadChildren: () =>
          import('./page/question-category-create/question-category-create.module').then(m => m.QuestionCategoryCreateModule),
      },
      {
        path: 'question-category/:questionCategoryId',
        loadChildren: () =>
          import('./page/question-category-detail/question-category-detail.module').then(m => m.QuestionCategoryDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
