import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/category-list/category-list.module').then(m => m.CategoryListModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: 'create',
        loadChildren: () => import('./page/category-create/category-create.module').then(m => m.CategoryCreateModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: ':id',
        loadChildren: () => import('./page/category-detail/category-detail.module').then(m => m.CategoryDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/category-edit/category-edit.module').then(m => m.CategoryEditModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
