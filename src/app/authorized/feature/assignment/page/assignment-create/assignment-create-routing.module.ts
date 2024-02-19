import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentCreateComponent } from './assignment-create.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentCreateRoutingModule {}
