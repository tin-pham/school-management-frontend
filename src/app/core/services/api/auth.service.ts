import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, tap } from 'rxjs';
import { API } from '@core/constants/api.constant';
import { LoginDTO } from '@core/models/dto/auth.dto';
import { LoginRO, LoginUserRO } from '@core/models/ro/auth.ro';
import { IJwtPayload } from '@core/interface/jwt-payload.interface';
import { BaseService } from './base.service';

const LOGIN_URL = API.AUTH.CONTROLLER + '/' + API.AUTH.SIGNIN.ROUTE;

@Injectable()
export class AuthService extends BaseService {
  user$ = new BehaviorSubject<LoginUserRO>(null);

  constructor(http: HttpClient, translator: TranslateService) {
    super(http, translator);
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
