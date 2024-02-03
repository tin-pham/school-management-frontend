import { HttpBackend, HttpRequest, HttpResponse } from '@angular/common/http';
import { TranslateLoader as AngularTranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin, filter } from 'rxjs';
import { map } from 'rxjs/operators';

export class TranslateLoaderService implements AngularTranslateLoader {
  constructor(private httpBackend: HttpBackend) {}

  public getTranslation(lang: string): Observable<any> {
    // Define the requests for UI and exception translations
    const uiRequest = new HttpRequest('GET', `./assets/i18n/${lang}/ui.json`);
    const exceptionRequest = new HttpRequest('GET', `./assets/i18n/${lang}/exception.json`);

    // Use the HttpBackend to handle the requests directly
    const uiTranslation = this.httpBackend.handle(uiRequest).pipe(
      filter(event => event instanceof HttpResponse),
      map((response: HttpResponse<any>) => response.body),
    );

    const exceptionTranslation = this.httpBackend.handle(exceptionRequest).pipe(
      filter(event => event instanceof HttpResponse),
      map((response: HttpResponse<any>) => response.body),
    );

    // Combine the translation objects from both requests
    return forkJoin({ ui: uiTranslation, error: exceptionTranslation }).pipe(map(response => ({ ...response.ui, ...response.error })));
  }
}
