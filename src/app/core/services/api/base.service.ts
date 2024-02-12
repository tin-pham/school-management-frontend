import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '@core/constants/api.constant';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from '@shared/toastr/toastr.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class BaseService {
  protected readonly BASE_URL = BASE_URL;

  constructor(
    private readonly http: HttpClient,
    private readonly translate: TranslateService,
    private readonly toastService: ToastrService,
  ) {}

  protected post<T>(url: string, body?: any) {
    return this.http.post<T>(this.BASE_URL + url, body).pipe(catchError(this.handleError.bind(this)));
  }

  protected get<T>(url: string, paramsObj?: any) {
    let params = new HttpParams();
    const token = localStorage.getItem('accessToken');
    const headers = token ? new HttpHeaders('Authorization' + `Bearer ${token}`) : null;

    if (paramsObj) {
      Object.keys(paramsObj).forEach(key => {
        params = params.append(key, paramsObj[key]);
      });
    }

    return this.http.get<T>(this.BASE_URL + url, { params, headers }).pipe(catchError(this.handleError.bind(this)));
  }

  protected patch<T>(url: string, id: number, body?: any) {
    const token = localStorage.getItem('accessToken');
    const headers = token ? new HttpHeaders('Authorization' + `Bearer ${token}`) : null;
    return this.http
      .patch<T>(this.BASE_URL + url.replace(':id', id.toString()), body, { headers })
      .pipe(catchError(this.handleError.bind(this)));
  }

  protected _delete<T>(url: string) {
    const token = localStorage.getItem('accessToken');
    const headers = token ? new HttpHeaders('Authorization' + `Bearer ${token}`) : null;
    return this.http.delete<T>(this.BASE_URL + url, { headers }).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    if (Array.isArray(error.error.code)) {
      error.error.code.forEach(code => {
        this.translate.get(code).subscribe((translatedError: string) => {
          this.toastService.error(translatedError); // Use the toastService to notify the user
        });
      });
      // You may want to throw an error or handle this scenario differently
      return throwError(() => new Error('Multiple errors occurred'));
    } else {
      return this.translate.get(error.error.code).pipe(
        map((translatedError: string) => {
          this.toastService.error(translatedError); // Notify single error
          throw new Error(translatedError);
        }),
        catchError(transError => {
          return throwError(() => transError);
        }),
      );
    }
  }
}
