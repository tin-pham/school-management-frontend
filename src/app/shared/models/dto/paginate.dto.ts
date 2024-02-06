export class PaginateDTO {
  page?: number = 1;
  limit?: number = 10;
  search?: string;

  constructor(data?: PaginateDTO) {
    Object.assign(this, data);
  }
}
