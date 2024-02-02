import { Component, ViewChild } from '@angular/core';
import { SidebarMenuComponent } from '@core/components/sidebar-menu/sidebar-menu.component';
//import { SpinnerService } from '@core/components/spinner/spinner.service';
import { AuthService } from '@core/services/api/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild(SidebarMenuComponent) sidebarMenu!: SidebarMenuComponent;
  isAuthenticated = false;

  constructor(
    //private readonly appSpinnerService: SpinnerService,
    private readonly translator: TranslateService,
    private readonly authService: AuthService,
  ) {
    //this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onToggleSidebar() {
    this.sidebarMenu.toggle();
  }
}
