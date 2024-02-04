import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-group',
  styleUrls: ['text-input-group.component.scss'],
  templateUrl: 'text-input-group.component.html',
})
export class TextInputGroupComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() value: string;
  @Input() required = false;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
