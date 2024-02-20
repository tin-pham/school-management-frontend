import { PaginateDTO } from './paginate.dto';

export class UserStoreDTO {
  username: string;
  password: string;
  email?: string;
  phone?: string;
  displayName: string;
  imageId?: number;
}

export class UserGetListDTO extends PaginateDTO {}

export class UserUpdateDTO {
  password?: string;
  email?: string;
  phone?: string;
  displayName?: string;
  imageId?: number;

  constructor(data?: UserUpdateDTO) {
    Object.assign(this, data);
  }
}

export class UserGetProfileDTO {
  withImage?: boolean;
}
