import { HttpClient } from '@angular/common/http';
import { TranslateLoader as AngularTranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export class TranslateLoaderService implements AngularTranslateLoader {
  constructor(private http: HttpClient) {}
  public getTranslation(lang: string): Observable<any> {
    const uiTranslation = this.http.get(`./assets/i18n/${lang}/ui.json`);
    const exceptionTranslation = this.http.get(`./assets/i18n/${lang}/exception.json`);

    return forkJoin({ ui: uiTranslation, error: exceptionTranslation }).pipe(map(response => ({ ...response.ui, ...response.error })));
  }
}
