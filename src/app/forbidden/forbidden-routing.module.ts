import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { ForbiddenComponent } from './forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: ForbiddenComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForbiddenRoutingModule {}
