import { Injectable } from '@angular/core';
import { API } from '@core/constants/api.constant';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserGetProfileRO, UserUpdateRO } from '@shared/models/ro/user.ro';
import { UserUpdateDTO } from '@shared/models/dto/user.dto';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  profile$ = new BehaviorSubject<UserGetProfileRO>(null);

  setProfile(user: UserGetProfileRO) {
    this.profile$.next(user);
  }

  getProfile(): Observable<UserGetProfileRO> {
    return this.get<UserGetProfileRO>(API.USER.CONTROLLER + '/' + API.USER.GET_PROFILE.ROUTE);
  }

  updateProfile(dto: UserUpdateDTO): Observable<UserUpdateRO> {
    return this.patch<UserUpdateRO>(API.USER.CONTROLLER + '/' + API.USER.UPDATE_PROFILE.ROUTE, '' as unknown as number, dto);
  }
}
