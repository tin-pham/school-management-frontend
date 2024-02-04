import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clearable-input',
  styleUrls: ['clearable-input.component.scss'],
  templateUrl: 'clearable-input.component.html',
})
export class ClearableInputComponent {
  @Input() value = '';
  @Input() placeholder = 'Search';
  @Output() valueChange = new EventEmitter();

  onInput(event: any) {
    this.value = event.target.value;
    this.onValueChange(); // Call this method to emit the valueChange event
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }

  clearValue() {
    this.value = '';
    this.onValueChange(); // Emit the valueChange event when clearing the value
  }
}
