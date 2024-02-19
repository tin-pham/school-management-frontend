import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentDetailComponent } from './assignment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentDetailRoutingModule {}
