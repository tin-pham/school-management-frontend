import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-group',
  styleUrls: ['textarea-group.component.scss'],
  templateUrl: 'textarea-group.component.html',
})
export class TextareaGroupComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() value: string;
  @Input() required = false;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
