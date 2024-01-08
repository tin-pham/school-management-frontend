import { Component, HostBinding, Input } from '@angular/core';
import { SpinnerSize } from './spinner.size';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() inside: boolean;

  @Input() size: SpinnerSize = 'medium';

  isFirstTime = false;

  @HostBinding('class.size-tiny')
  get tiny() {
    return this.size === 'tiny';
  }

  @HostBinding('class.size-giant')
  get giant() {
    return this.size === 'giant';
  }
}
