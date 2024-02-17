import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    //private readonly appSpinnerService: SpinnerService,
    private translator: TranslateService,
    private activatedRoute: ActivatedRoute,
  ) {
    //this.appSpinnerService.trackRouteLoadIndicator();
    this.translator.use('vn');
  }
}
