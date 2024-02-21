import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    //private readonly appSpinnerService: SpinnerService,
    private translator: TranslateService,
  ) {
    //this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
  }
}
