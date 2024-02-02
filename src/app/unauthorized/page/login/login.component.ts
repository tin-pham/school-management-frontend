import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE } from '@core/constants/role.constant';
import { AuthService } from '@core/services/api/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly _authService: AuthService,
  ) {
    if (this._authService.isAuthenticated()) {
      const currentRoles = this._authService.getCurrentRoles();

      if (currentRoles.includes(ROLE.ADMIN)) {
        this.router.navigate(['/dashboard']);
      } else if (currentRoles.includes(ROLE.STUDENT)) {
        this.router.navigate(['/home']);
      }
    }
  }
}
