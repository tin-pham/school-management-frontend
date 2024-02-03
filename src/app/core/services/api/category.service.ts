import { Injectable } from '@angular/core';
import { CategoryGetListDTO } from '@shared/models/dto/category.dto';
import { API } from '@core/constants/api.constant';
import { CategoryGetListRO } from '@shared/models/ro/category.ro';
import { BaseService } from './base.service';

const CATEGORY_API = API.CATEGORY;

@Injectable()
export class CategoryService extends BaseService {
  getList(dto: CategoryGetListDTO) {
    return this.get<CategoryGetListRO>(CATEGORY_API.CONTROLLER + CATEGORY_API.GET_LIST.ROUTE, dto);
  }
}