import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, tap } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { IJwtPayload } from '@core/interface/jwt-payload.interface';
import { LoginRO, LoginUserRO } from '@shared/models/ro/auth.ro';
import { LoginDTO } from '@shared/models/dto/auth.dto';
import { BaseService } from './base.service';

const LOGIN_URL = API.AUTH.CONTROLLER + '/' + API.AUTH.SIGNIN.ROUTE;
const REFRESH_TOKEN_URL = API.AUTH.CONTROLLER + '/' + API.AUTH.REFRESH_TOKEN.ROUTE;

@Injectable()
export class AuthService extends BaseService {
  user$ = new BehaviorSubject<LoginUserRO>(null);

  getToken() {
    return localStorage.getItem('accessToken');
  }

  refreshToken() {
    return this.post(REFRESH_TOKEN_URL).pipe(
      tap((tokens: any) => {
        localStorage.setItem('accessToken', tokens.accessToken);
      }),
    );
  }

  login(dto: LoginDTO) {
    return this.post<LoginRO>(LOGIN_URL, dto).pipe(
      tap((response: LoginRO) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.user$.next(response.user);
      }),
    );
  }

  logout() {
    // Clear local storage and handle logout
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redirect to login page or handle logout as needed
  }

  isAuthenticated() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return false;
    }

    const decodedToken = jwtDecode(accessToken) as IJwtPayload;
    const isExpired = decodedToken.exp < Date.now() / 1000;
    if (isExpired) {
      return false;
    }

    this.user$.next({
      id: decodedToken.userId,
      username: decodedToken.username,
      email: decodedToken.email,
      phone: decodedToken.phone,
      roles: decodedToken.roles,
      displayName: decodedToken.displayName,
    });

    return true;
  }

  getCurrentRoles() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return [];
    }

    const decodedToken = jwtDecode(accessToken) as IJwtPayload;
    return decodedToken.roles;
  }
}
