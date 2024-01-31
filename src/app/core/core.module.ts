import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderService } from './services/translate-loader.service';
import { BaseService } from './services/api/base.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateLoaderService(http);
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vn',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [BaseService],
  exports: [CommonModule, TranslateModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule {}
