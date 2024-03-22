import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-input-group',
  styleUrls: ['number-input-group.component.scss'],
  templateUrl: 'number-input-group.component.html',
})
export class NumberInputGroupComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() required = false;
  @Input() min = 0;
  @Input() max = Infinity;
  @Input() icon: string;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(value: number) {
    this.valueChange.emit(value);
  }
}
