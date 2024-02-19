import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    children: [
      {
        path: 'create',
        loadChildren: () => import('./page/assignment-create/assignment-create.module').then(m => m.AssignmentCreateModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./page/assignment-detail/assignment-detail.module').then(m => m.AssignmentDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentRoutingModule {}
