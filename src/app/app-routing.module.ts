import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from '@core/guards/auth.guard';
import { SidebarMenuComponent } from '@core/components/sidebar-menu/sidebar-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: SidebarMenuComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
