import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthService } from '@core/services/api/auth.service';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LoginFormComponent],
  providers: [AuthService],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
