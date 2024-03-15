import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-input-group',
  templateUrl: 'checkbox-input-group.component.html',
  styleUrl: 'checkbox-input-group.component.scss',
})
export class CheckboxInputGroupComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter();
  @Input() label: string;

  onCheckedChange($event: MatCheckboxChange) {
    this.checkedChange.emit($event.checked);
  }
}
