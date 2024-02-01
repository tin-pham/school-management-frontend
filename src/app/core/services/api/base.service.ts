import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '@core/constants/api.constant';
import { TranslateService } from '@ngx-translate/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class BaseService {
  protected readonly BASE_URL = BASE_URL;

  constructor(
    private readonly http: HttpClient,
    private readonly translate: TranslateService,
  ) {}

  post<T>(url: string, body: any) {
    return this.http.post<T>(this.BASE_URL + url, body).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    const errorTranslationKey = error.error.code.replace('_', '.');
    return this.translate.get(errorTranslationKey).pipe(
      map((translatedError: string) => {
        throw new Error(translatedError);
      }),
      catchError(transError => {
        return throwError(() => transError);
      }),
    );
  }
}
