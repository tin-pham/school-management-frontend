import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  styleUrls: ['primary-button.component.scss'],
  templateUrl: 'primary-button.component.html',
})
export class PrimaryButtonComponent {
  @Input() disabled: boolean;
  @Input() type: string;
}
