import { PaginateDTO } from './paginate.dto';

export class UserStoreDTO {
  username: string;
  password: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class UserGetListDTO extends PaginateDTO {}

export class UserUpdateDTO {
  password?: string;
  email?: string;
  phone?: string;
  displayName?: string;

  constructor(data?: UserUpdateDTO) {
    Object.assign(this, data);
  }
}
