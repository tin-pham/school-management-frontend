import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherEditComponent } from './teacher-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherEditRoutingModule {}
