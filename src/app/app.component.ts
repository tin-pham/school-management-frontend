import { Component } from '@angular/core';
import { SpinnerService } from '@core/components/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private readonly appSpinnerService: SpinnerService) {
    this.appSpinnerService.trackRouteLoadIndicator();
  }
}
