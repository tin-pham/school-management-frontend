import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/category-list/category-list.module').then(m => m.CategoryListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./page/category-create/category-create.module').then(m => m.CategoryCreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
