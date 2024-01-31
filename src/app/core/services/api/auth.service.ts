import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { LoginDTO } from '@core/models/dto/auth.dto';
import { BaseService } from './base.service';

const LOGIN_URL = API.AUTH.CONTROLLER + '/' + API.AUTH.SIGNIN.ROUTE;

@Injectable()
export class AuthService extends BaseService {
  login(dto: LoginDTO) {
    return this.post(LOGIN_URL, dto);
  }
}
