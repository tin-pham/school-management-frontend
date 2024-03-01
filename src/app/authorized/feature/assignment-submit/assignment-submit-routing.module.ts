import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentSubmitComponent } from './assignment-submit.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentSubmitComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./page/assignment-submit-detail/assignment-submit-detail.module').then(m => m.AssignmentSubmitDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentSubmitRoutingModule {}
