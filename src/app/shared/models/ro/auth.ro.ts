export class LoginUserRO {
  id: number;
  username: string;
  email: string;
  phone: string;
  roles: string[];
  displayName: string;
}

export class LoginRO {
  accessToken: string;
  refreshToken: string;
  user: LoginUserRO;
}
