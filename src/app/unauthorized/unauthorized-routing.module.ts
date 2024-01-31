import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthorizedComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthorizedRoutingModule {}
