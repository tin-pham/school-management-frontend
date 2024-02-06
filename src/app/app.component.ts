import { Component, ViewChild } from '@angular/core';
import { SidebarMenuComponent } from '@core/components/sidebar-menu/sidebar-menu.component';
import { AuthService } from '@core/services/api/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    //private readonly appSpinnerService: SpinnerService,
    private readonly translator: TranslateService,
    private readonly authService: AuthService,
  ) {
    //this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
  }
}
