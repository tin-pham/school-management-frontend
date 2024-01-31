import { NgModule } from '@angular/core';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { LoginFormModule } from './container/login-form/login-form.module';

const CONTAINERS = [LoginFormModule];

@NgModule({
  imports: [...CONTAINERS, UnauthorizedRoutingModule],
  declarations: [UnauthorizedComponent],
})
export class UnauthorizedModule {}
