import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from '@core/guards/role.guard';
import { ROLE } from '@core/constants/role.constant';
import { AssignmentComponent } from './assignment.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/assignment-home/assignment-home.module').then(m => m.AssignmentHomeModule),
        canActivate: [roleGuard([ROLE.TEACHER, ROLE.STUDENT])],
      },
      {
        path: 'create',
        loadChildren: () => import('./page/assignment-create/assignment-create.module').then(m => m.AssignmentCreateModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
      {
        path: ':id',
        loadChildren: () => import('./page/assignment-detail/assignment-detail.module').then(m => m.AssignmentDetailModule),
        canActivate: [roleGuard([ROLE.STUDENT])],
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/assignment-edit/assignment-edit.module').then(m => m.AssignmentEditModule),
        canActivate: [roleGuard([ROLE.TEACHER])],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentRoutingModule {}
