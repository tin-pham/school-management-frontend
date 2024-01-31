import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';
import { ToastrService } from '@shared/toastr/toastr.service';
import { finalize, first } from 'rxjs';

@Component({
  selector: 'app-login-form',
  styleUrls: ['login-form.component.scss'],
  templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,
    private toast: ToastrService,
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    if (!this.username || !this.password) {
      return;
    }

    this.loading = true;
    this.authService
      .login({
        username: this.username,
        password: this.password,
      })
      .pipe(first())
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => this.toast.success('Login successfully!'),
        error: (exception: Error) => this.toast.error(exception.message),
      });
  }
}
