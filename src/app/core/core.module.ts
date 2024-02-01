import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { TranslateLoaderService } from './services/translate-loader.service';
import { BaseService } from './services/api/base.service';
import { AuthService } from './services/api/auth.service';
import { RoleService } from './services/role.service';
import { HeaderComponent } from './components/header/header.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateLoaderService(http);
}

@NgModule({
  imports: [
    SharedModule,
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
  declarations: [HeaderComponent],
  providers: [BaseService, AuthService, RoleService],
  exports: [CommonModule, TranslateModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, HeaderComponent],
})
export class CoreModule {}
