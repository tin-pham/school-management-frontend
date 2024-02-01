import { ChangeDetectorRef, Component } from '@angular/core';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { AuthService } from '@core/services/api/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isAuthenticated = false;
  constructor(
    private readonly appSpinnerService: SpinnerService,
    private readonly translator: TranslateService,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef, // Add this line
  ) {
    this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
