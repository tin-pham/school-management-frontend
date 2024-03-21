import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLE } from '@core/constants/role.constant';
import { AuthService } from '@core/services/api/auth.service';
import { ToastrService } from '@shared/toastr/toastr.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['login-form.component.scss'],
  templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  submitted = false;
  returnUrl: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit() {
    this.submitted = true;

    if (!this.username || !this.password) {
      return;
    }

    this.authService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: response => {
          this.toast.success('Đăng nhập thành công');
          if (response.user.roles.includes(ROLE.ADMIN)) {
            this.router.navigate(['/dashboard']);
          } else if (response.user.roles.includes(ROLE.STUDENT) || response.user.roles.includes(ROLE.TEACHER)) {
            this.router.navigate(['/home']);
          }
        },
      });

    // Save to localstorage
  }
}
