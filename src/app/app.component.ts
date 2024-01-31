import { Component } from '@angular/core';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private readonly appSpinnerService: SpinnerService,
    private readonly translator: TranslateService,
  ) {
    this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
  }
}
