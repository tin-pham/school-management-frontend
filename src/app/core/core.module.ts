import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateLoaderService } from './services/translate-loader.service';
import { BaseService } from './services/api/base.service';
import { AuthService } from './services/api/auth.service';
import { RoleService } from './services/role.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

const COMPONENTS = [HeaderComponent, SidebarMenuComponent];

export function createTranslateLoader(http: HttpBackend) {
  return new TranslateLoaderService(http);
}

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vn',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpBackend],
      },
    }),
  ],
  declarations: [...COMPONENTS],
  providers: [BaseService, AuthService, RoleService],
  exports: [CommonModule, TranslateModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, ...COMPONENTS],
})
export class CoreModule {}
