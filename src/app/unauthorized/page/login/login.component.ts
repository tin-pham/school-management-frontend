import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      this.router.navigate(['/home']);
    }
  }
}
