import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentSubmitDetailComponent } from './assignment-submit-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentSubmitDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentSubmitDetailRoutingModule {}
