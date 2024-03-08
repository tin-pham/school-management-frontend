import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationDropdownComponent } from './notification-dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationDropdownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationDropdownRoutingModule {}
