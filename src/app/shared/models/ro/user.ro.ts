import { PaginateRO } from './paginate.ro';

export class UserGetProfileRO {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
  imageUrl?: string;

  constructor(data?: UserGetProfileRO) {
    Object.assign(this, data);
  }
}

export class UserStoreRO {
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class UserGetDetailRoleRO {
  id: number;
  name: string;
}

export class UserGetListDataRO {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class UserGetListRO extends PaginateRO<UserGetListDataRO> {
  data: UserGetListDataRO[];
}

export class UserGetDetailRO {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class UserUpdateRO {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class UserDeleteRO {
  id: number;
}
