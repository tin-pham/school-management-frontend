import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  styleUrls: ['secondary-button.component.scss'],
  templateUrl: 'secondary-button.component.html',
})
export class SecondaryButtonComponent {
  @Input() disabled = false;
}
