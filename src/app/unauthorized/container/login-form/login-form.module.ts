import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
