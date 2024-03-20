import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherCreateComponent } from './teacher-create.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherCreateRoutingModule {}
