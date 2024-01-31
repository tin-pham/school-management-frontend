import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService,
    //private alertService: AlertService,
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

    // Add your validation logic here if necessary
    if (!this.username || !this.password) {
      // Handle the error state
      return;
    }

    this.loading = true;
    // this.authenticationService
    //   .login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     },
    //   );
  }
}
