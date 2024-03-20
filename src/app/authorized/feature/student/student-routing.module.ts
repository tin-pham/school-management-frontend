import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/student-home/student-home.module').then(m => m.StudentHomeModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./page/student-create/student-create.module').then(m => m.StudentCreateModule),
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/student-edit/student-edit.module').then(m => m.StudentEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
