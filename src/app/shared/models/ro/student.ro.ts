import { PaginateRO } from './paginate.ro';

export class StudentStoreRO {
  id: string;
  username: string;
  email: string;
  phone: string;
  displayName: string;
}

export class StudentGetListDataRO {
  id: string;
  username: string;
  email: string;
  phone: string;
  displayName: string;
  userImageUrl: string;
}

export class StudentGetListRO extends PaginateRO<StudentGetListDataRO> {
  data: StudentGetListDataRO[];
}

export class StudentGetDetailRO {
  id: string;
  username: string;
  email: string;
  phone: string;
  displayName: string;
}

export class StudentUpdateUserRO {
  username: string;
  email: string;
  phone: string;
  displayName: string;
}

export class StudentUpdateRO {
  id: string;
  username: string;
  email: string;
  phone: string;
  displayName: string;
}

export class StudentDeleteRO {
  id: string;
  username: string;
  email: string;
  phone: string;
  displayName: string;
}
