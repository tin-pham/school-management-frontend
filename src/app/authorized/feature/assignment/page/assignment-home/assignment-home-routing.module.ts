import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentHomeComponent } from './assignment-home.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentHomeRoutingModule {}
