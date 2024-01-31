import { NgModule } from '@angular/core';
import { LoginFormModule } from '../../container/login-form/login-form.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [LoginFormModule, LoginRoutingModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
