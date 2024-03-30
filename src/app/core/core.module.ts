import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotificationCommentModule } from '@features/notification/component/notification-comment/notification-comment.module';
import { NotificationExerciseModule } from '@features/notification/component/notification-exercise/notification-exercise.module';
import { NotificationAssignmentModule } from '@features/notification/component/notification-assignment/notification-assignment.module';
import { NotificationLessonModule } from '@features/notification/component/notification-lesson/notification-lesson.module';
import { TranslateLoaderService } from './services/translate-loader.service';
import { BaseService } from './services/api/base.service';
import { AuthService } from './services/api/auth.service';
import { RoleService } from './services/role.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { UserService } from './services/api/user.service';
import { NotificationDropdownComponent } from './components/notification-dropdown/notification-dropdown.component';
import { NotificationService } from './services/api/notification.service';
import { UserNotificationService } from './services/api/user-notification.service';

const COMPONENTS = [HeaderComponent, SidebarMenuComponent, ConfirmDialogComponent, NotificationDropdownComponent];

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

    NotificationCommentModule,
    NotificationExerciseModule,
    NotificationAssignmentModule,
    NotificationLessonModule,

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
  providers: [BaseService, AuthService, RoleService, UserService, NotificationService, UserNotificationService],
  exports: [CommonModule, TranslateModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, ...COMPONENTS],
})
export class CoreModule {}
