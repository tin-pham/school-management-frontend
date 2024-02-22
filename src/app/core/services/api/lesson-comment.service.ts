import { Injectable } from '@angular/core';
import { LessonCommentGetListDTO, LessonCommentStoreDTO, LessonCommentUpdateDTO } from '@shared/models/dto/lesson-comment.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  LessonCommentDeleteRO,
  LessonCommentGetListRO,
  LessonCommentStoreRO,
  LessonCommentUpdateRO,
} from '@shared/models/ro/lesson-comment.ro';
import { API } from '@core/constants/api.constant';
import { BaseService } from './base.service';

export interface IReplyState {
  isReplying: boolean;
  commentId: number;
}

@Injectable()
export class LessonCommentService extends BaseService {
  isReplying$ = new BehaviorSubject<IReplyState>({
    isReplying: false,
    commentId: 0,
  });

  delete(id: number): Observable<LessonCommentDeleteRO> {
    return this._delete(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.DELETE.ROUTE.replace(':id', id.toString()));
  }

  update(id: number, dto: LessonCommentUpdateDTO): Observable<LessonCommentUpdateRO> {
    return this.patch<LessonCommentUpdateRO>(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.UPDATE.ROUTE, id, dto);
  }

  setIsReplying(isReplying: IReplyState) {
    this.isReplying$.next(isReplying);
  }

  store(dto: LessonCommentStoreDTO): Observable<LessonCommentStoreRO> {
    return this.post<LessonCommentStoreRO>(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.STORE.ROUTE, dto);
  }

  getList(dto: LessonCommentGetListDTO): Observable<LessonCommentGetListRO> {
    return this.get<LessonCommentGetListRO>(API.LESSON_COMMENT.CONTROLLER + '/' + API.LESSON_COMMENT.GET_LIST.ROUTE, dto);
  }
}
