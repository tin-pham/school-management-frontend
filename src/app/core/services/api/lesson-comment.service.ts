import { Injectable } from '@angular/core';
import { LessonCommentGetListDTO, LessonCommentStoreDTO } from '@shared/models/dto/lesson-comment.dto';
import { Observable } from 'rxjs';
import { LessonCommentGetListRO, LessonCommentStoreRO } from '@shared/models/ro/lesson-comment.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

@Injectable()
export class LessonCommentService extends BaseService {
  store(dto: LessonCommentStoreDTO): Observable<LessonCommentStoreRO> {
    return this.post<LessonCommentStoreRO>(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.STORE.ROUTE, dto);
  }

  getList(dto: LessonCommentGetListDTO): Observable<LessonCommentGetListRO> {
    return this.get<LessonCommentGetListRO>(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.GET_LIST.ROUTE, dto);
  }
}
