import { PaginateRO } from './paginate.ro';

export class TeacherStoreRO {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class TeacherGetListDataRO {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
  userImageUrl?: string;
}

export class TeacherGetListRO extends PaginateRO<TeacherGetListDataRO> {
  data: TeacherGetListDataRO[];
}

export class TeacherGetDetailRO {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class TeacherUpdateRO {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}

export class TeacherDeleteRO {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  displayName: string;
}
