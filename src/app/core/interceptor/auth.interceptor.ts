import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '@core/services/api/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  //private isRefreshing = false;
  //private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getToken()) {
      request = this.addTokenHeader(request, this.authService.getToken());
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          // Handle 401 error: Redirect to login, refresh token, etc.
          // This is a simple redirect to login example:
          this.router.navigate(['/login']);
          return throwError(() => new Error('Unauthorized'));
        } else if (error.status === 403) {
          this.router.navigate(['/403']);
          return throwError(() => new Error('Forbidden'));
        } else {
          return throwError(() => error);
        }
      }),
    );
    // catchError(error => {
    //   if (error instanceof HttpErrorResponse && error.status === 401) {
    //     // Check if the request is a login request
    //     if (this.isLoginRequest(request)) {
    //       // If it's a login request, don't attempt to refresh the token
    //       return throwError(() => error);
    //     } else {
    //       // For other requests, attempt to handle the 401 error
    //       return this.handle401Error(request, next);
    //     }
    //   } else {
    //     return throwError(() => error);
    //   }
    // }),
  }

  private addTokenHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  //   if (!this.isRefreshing) {
  //     this.isRefreshing = true;
  //     this.refreshTokenSubject.next(null);
  //
  //     return this.authService.refreshToken().pipe(
  //       switchMap((token: any) => {
  //         this.isRefreshing = false;
  //         this.refreshTokenSubject.next(token.accessToken);
  //         return next.handle(this.addTokenHeader(request, token.accessToken));
  //       }),
  //       catchError(error => {
  //         this.isRefreshing = false;
  //         this.authService.logout(); // Ensure to clear tokens and redirect to login
  //         return throwError(() => error);
  //       }),
  //     );
  //   } else {
  //     return this.refreshTokenSubject.pipe(
  //       filter(token => token != null),
  //       take(1),
  //       switchMap(accessToken => {
  //         return next.handle(this.addTokenHeader(request, accessToken));
  //       }),
  //     );
  //   }
  // }

  //private isLoginRequest(request: HttpRequest<any>): boolean {
  // Implement logic to determine if the request is a login request
  // For example, check if the URL ends with '/login' or matches a specific pattern
  // return request.url.endsWith('/login'); // Adjust this condition based on your app's login URL
  // }
}
