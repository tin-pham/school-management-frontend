import { ROLE } from '@core/constants/role.constant';

export interface IJwtPayload {
  userId: number;
  username: string;
  email: string;
  phone: string;
  roles: ROLE[];
  displayName: string;
  iat: number;
  exp: number;
}
