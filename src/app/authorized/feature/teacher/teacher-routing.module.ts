import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/teacher-home/teacher-home.module').then(m => m.TeacherHomeModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./page/teacher-create/teacher-create.module').then(m => m.TeacherCreateModule),
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./page/teacher-edit/teacher-edit.module').then(m => m.TeacherEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
