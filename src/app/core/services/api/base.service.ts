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

  getFileFormData(files: File[]) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }
    return formData;
  }

  protected post<T>(url: string, body?: any) {
    const headers = this.getHeaders();
    return this.http.post<T>(this.BASE_URL + url, body, { headers }).pipe(catchError(this.handleError.bind(this)));
  }

  protected get<T>(url: string, paramsObj?: any) {
    let params = new HttpParams();
    const headers = this.getHeaders();

    if (paramsObj) {
      Object.keys(paramsObj).forEach(key => {
        params = params.append(key, paramsObj[key]);
      });
    }

    return this.http.get<T>(this.BASE_URL + url, { params, headers }).pipe(catchError(this.handleError.bind(this)));
  }

  protected patch<T>(url: string, id: number, body?: any) {
    const headers = this.getHeaders();
    return this.http
      .patch<T>(this.BASE_URL + url.replace(':id', id.toString()), body, { headers })
      .pipe(catchError(this.handleError.bind(this)));
  }

  protected _delete<T>(url: string, query?: any) {
    const token = localStorage.getItem('accessToken');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }

    let params = new HttpParams();
    if (query) {
      // Assuming 'query' can be an object with multiple key-value pairs
      Object.keys(query).forEach(key => {
        // If the value is an array, join it with commas
        const value = query[key];
        if (Array.isArray(value)) {
          params = params.append(key, value.join(','));
        } else {
          params = params.append(key, value);
        }
      });
    }

    return this.http.delete<T>(this.BASE_URL + url, { headers, params }).pipe(catchError(this.handleError.bind(this)));
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
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
      if (error.status === 403 && !error.error?.code) {
        this.toastService.error('Bạn không có quyền thực hiện hành động này');
      }
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
