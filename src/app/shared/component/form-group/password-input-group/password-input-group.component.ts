import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-input-group',
  styleUrls: ['password-input-group.component.scss'],
  templateUrl: 'password-input-group.component.html',
})
export class PasswordInputGroupComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() required = false;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
